"use client";
import { type Produce } from "@/app/page";
import { useEffect, useState } from "react";

type props = {
  item: Produce;
  key: number;
  setTotalCost: React.Dispatch<React.SetStateAction<number>>;
};

export default function ItemCell({ item, key, setTotalCost }: props) {
  const [itemQty, setItemQty] = useState(0);
  const onAdd = (item: Produce) => {
    setItemQty((prevQty) => prevQty + 1);
    setTotalCost((prevCost) => prevCost + item.cost);
  };
  const onSubtract = (item: Produce) => {
    if (itemQty === 0) return;
    setItemQty((prevQty) => prevQty - 1);
    setTotalCost((prevCost) => prevCost - item.cost);
  };

  const onQtyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: Produce
  ) => {
    console.log(e.target.value);
    console.log(item.cost * +e.target.value);
    setTotalCost((prevCost) => prevCost + item.cost * +e.target.value);
  };
  return (
    <tr key={key}>
      <td className="border border-stone-400 p-4 text-left">{item.name}</td>
      <td className="border border-stone-400 p-4 text-left">{item.qty}</td>
      <td className="border border-stone-400 p-4 text-left">{item.unit}</td>
      <td className="border border-stone-400 p-4 text-left">{item.cost}</td>
      <td className="border border-stone-400 p-4 text-left">
        <div className="flex">
          <button
            onClick={() => onSubtract(item)}
            className="p-2 text-xl font-bold bg-stone-200"
          >
            -
          </button>
          <input
            value={itemQty}
            min={0}
            onChange={(e) => onQtyChange(e, item)}
            className={`${
              itemQty === 0 ? "" : "bg-green-200"
            } w-12 text-center`}
            type="text"
          />
          <button
            onClick={() => onAdd(item)}
            className="p-2 text-xl font-bold bg-stone-200"
          >
            +
          </button>
        </div>
      </td>
    </tr>
  );
}
