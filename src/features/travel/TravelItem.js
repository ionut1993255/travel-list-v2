import { useDispatch } from "react-redux";

import { deleteTravelItem, toggleTravelItem } from "./travelSlice";

export default function TravelItem({ travelItem }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        id={`checkbox-${travelItem.id}`}
        type="checkbox"
        checked={travelItem.packed}
        onChange={() => dispatch(toggleTravelItem(travelItem.id))}
      />
      <span style={travelItem.packed ? { textDecoration: "line-through" } : {}}>
        {travelItem.quantity} {travelItem.description}
      </span>
      <button onClick={() => dispatch(deleteTravelItem(travelItem.id))}>
        ❌
      </button>
    </li>
  );
}
