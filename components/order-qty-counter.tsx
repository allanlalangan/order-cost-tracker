"use client";

import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";
import { Input } from "./ui/input";
import { Produce } from "@/app/orders/columns";
import { useState } from "react";
import { TableCell } from "./ui/table";

type props = {
  product: Produce;
};

export function OrderQtyCounter({ product }: props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <TableCell>
        <div className="flex gap-1">
          <Button
            onClick={() => (count === 0 ? null : setCount(count - 1))}
            variant="outline"
            size="icon"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            readOnly
            className={`${
              count === 0
                ? ""
                : "bg-emerald-300 dark:bg-emerald-300 dark:text-black"
            } w-16 transition`}
            type="number"
            value={count}
            max={7}
          />
          <Button
            onClick={() => (count === 7 ? null : setCount(count + 1))}
            variant="outline"
            size="icon"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-1 w-16">
          $ {(count * product.price).toFixed(2)}
        </div>
      </TableCell>
    </>
  );
}
