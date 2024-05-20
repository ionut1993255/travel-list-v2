import toast from "react-hot-toast";

const initialState = {
  travelItems: [],
};

export default function travelReducer(state = initialState, action) {
  switch (action.type) {
    case "travel/addTravelItems":
      return {
        ...state,
        travelItems: [...state.travelItems, action.payload],
      };
    case "travel/toggleTravelItem":
      return {
        ...state,
        travelItems: state.travelItems.map((item) =>
          item.id === action.payload ? { ...item, packed: !item.packed } : item
        ),
      };
    case "travel/deleteTravelItem":
      return {
        ...state,
        travelItems: state.travelItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "travel/setLocalStorageTravelItems":
      return { ...state, travelItems: action.payload };
    case "travel/clearTravelItemsList":
      return initialState;
    default:
      return state;
  }
}

export function addTravelItems(item) {
  return (dispatch) => {
    dispatch({
      type: "travel/addTravelItems",
      payload: item,
    });
    toast.success("The travel item was successfully added !");
  };
}

export function toggleTravelItem(id) {
  return (dispatch) => {
    dispatch({
      type: "travel/toggleTravelItem",
      payload: id,
    });
    toast.success("The travel item status was successfully changed !");
  };
}

export function deleteTravelItem(id) {
  const confirm = window.confirm(
    "Are you sure you want to delete this travel item?"
  );

  return (dispatch) => {
    if (confirm) {
      dispatch({
        type: "travel/deleteTravelItem",
        payload: id,
      });
      toast.success("The travel item was successfully deleted !");
    }
  };
}

export function clearTravelItemsList() {
  return (dispatch, getState) => {
    const travelItems = getState().travel.travelItems;

    if (!travelItems.length) return;

    const confirm = window.confirm(
      "Are you sure you want to delete all travel items?"
    );

    if (confirm) {
      dispatch({
        type: "travel/clearTravelItemsList",
      });
      toast.success("The travel packing list was successfully cleared !");
    }
  };
}

export const getTravelItems = (store) => store.travel.travelItems;
