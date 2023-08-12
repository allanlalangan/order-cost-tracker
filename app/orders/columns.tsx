"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Produce = {
  name: string;
  item_number: string;
  pack: number;
  size: string;
  weight: number;
  price: number;
  two_week_ad?: boolean;
};

export const columns: ColumnDef<Produce>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "item_number",
    header: "Item #",
  },
  {
    accessorKey: "pack",
    header: "Pack",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "weight",
    header: "Weight(lbs)",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];
