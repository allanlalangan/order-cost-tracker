"use client";

import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";
import { Input } from "./ui/input";
import { CharliesItem, OGCItem } from "@/app/orders/columns";
import { useState } from "react";
import { TableCell } from "./ui/table";

type props = {
  product: CharliesItem | OGCItem;
  setOrderTotal: React.Dispatch<React.SetStateAction<number>>;
};

export function OrderQtyCounter({ product, setOrderTotal }: props) {
  const [count, setCount] = useState(0);

  const onSub = () => {
    if (count === 0) return;
    setCount(count - 1);
    setOrderTotal((prev) => prev - +product.price);
  };

  const onAdd = () => {
    if (count === 7) return;
    setCount(count + 1);
    setOrderTotal((prev) => prev + +product.price);
  };

  return (
    <>
      <TableCell>
        <div className="flex gap-1">
          <Button onClick={onSub} variant="outline" size="icon">
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
          <Button onClick={onAdd} variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-1 w-16">
          $ {(count * +product.price).toFixed(2)}
        </div>
      </TableCell>
    </>
  );
}
