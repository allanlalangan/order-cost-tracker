"use client";

import ItemCell from "@/components/ItemCell";
import Image from "next/image";
import { useState } from "react";

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
];

export default function Home() {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <main className="flex flex-col">
      <h1 className="text-2xl text-emerald-100 p-4">Produce Order</h1>
      <section className="flex px-4 w-full">
        <table className="table-auto border-collapse border bg-stone-100 border-stone-400 w-screen">
          <thead>
            <tr className="">
              <th className="p-4 text-left border border-stone-400">Item</th>
              <th className="p-4 text-left border border-stone-400">Qty</th>
              <th className="p-4 text-left border border-stone-400">Unit</th>
              <th className="p-4 text-left border border-stone-400">Cost</th>
              <th className="p-4 text-left border border-stone-400">
                Order Qty
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, i) => (
              <ItemCell key={i} item={item} setTotalCost={setTotalCost} />
            ))}
          </tbody>
        </table>
        <section className="md:static fixed bg-stone-300 bottom-0 p-4">
          <h2 className="text-xl">Order Total:</h2>
          <p className="text-2xl">
            ${totalCost <= 0 ? 0 : totalCost.toFixed(2)}
          </p>
        </section>
      </section>
    </main>
  );
}
