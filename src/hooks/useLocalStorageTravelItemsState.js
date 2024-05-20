import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTravelItems } from "../features/travel/travelSlice";

import { useLocalStorageState } from "./useLocalStorageState";

export function useLocalStorageTravelItemsState() {
  const items = useSelector(getTravelItems);
  const dispatch = useDispatch();
  const [travelItems, setTravelItems] = useLocalStorageState([], "travelItems");

  useEffect(
    function () {
      if (items.length > 0) {
        setTravelItems(items);
      } else {
        setTravelItems([]);
      }
    },
    [items, setTravelItems]
  );

  useEffect(() => {
    dispatch({
      type: "travel/setLocalStorageTravelItems",
      payload: travelItems,
    });
  }, [dispatch, travelItems]);

  return { travelItems };
}
