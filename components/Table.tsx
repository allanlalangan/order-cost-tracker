"use client";

import { useState } from "react";
import ItemCell from "./ItemCell";

export type Produce = {
  name: string;
  qty: number;
  unit: string;
  cost: number;
};

const sampleData: Produce[] = [
  { name: "Apple Fuji", qty: 50, unit: "LB", cost: 49.99 },
  { name: "Apple Pink Lady", qty: 50, unit: "LB", cost: 39.99 },
  { name: "Apple Granny Smith", qty: 50, unit: "LB", cost: 59.99 },
  { name: "Apple Gala", qty: 50, unit: "LB", cost: 29.99 },
  { name: "Apple Honeycrisp", qty: 50, unit: "LB", cost: 69.99 },
  { name: "Banana Ripe", qty: 50, unit: "LB", cost: 19.99 },
  { name: "Peach Yellow", qty: 50, unit: "LB", cost: 29.99 },
  { name: "Lettuce Green Leaf", qty: 50, unit: "LB", cost: 29.99 },
  { name: "Lettuce Red Leaf", qty: 50, unit: "LB", cost: 29.99 },
  { name: "Herbs Sage", qty: 6, unit: "CT", cost: 19.99 },
  { name: "Herbs Rosemary", qty: 6, unit: "CT", cost: 19.99 },
  { name: "Peppers Sweet Mini", qty: 10, unit: "CT", cost: 29.99 },
];

export default function Table() {
  const [totalCost, setTotalCost] = useState(0);
  return (
    <section className="flex px-4 w-full">
      <table className="mb-32 table-auto border-collapse border bg-stone-100 border-stone-400">
        <thead>
          <tr className="">
            <th className="p-4 text-left border border-stone-400">Item</th>
            <th className="p-4 text-left border border-stone-400">Qty</th>
            <th className="p-4 text-left border border-stone-400">Unit</th>
            <th className="p-4 text-left border border-stone-400">Cost</th>
            <th className="p-4 text-left border border-stone-400">Order Qty</th>
            <th className="p-4 text-left border border-stone-400">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, i) => (
            <ItemCell key={i} item={item} setTotalCost={setTotalCost} />
          ))}
        </tbody>
      </table>
      <section className="fixed bg-stone-300 bottom-0 p-4">
        <h2 className="text-xl">Order Total:</h2>
        <p className="text-2xl">${totalCost <= 0 ? 0 : totalCost.toFixed(2)}</p>
      </section>
    </section>
  );
}
