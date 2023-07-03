"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Produce = {
  name: string;
  qty: number;
  unit: string;
  cost: number;
};

export const columns: ColumnDef<Produce>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "qty",
    header: "Quantity",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "cost",
    header: "Cost",
  },
];
