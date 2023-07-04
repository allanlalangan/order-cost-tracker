"use client";

import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";
import { Input } from "./ui/input";
import { Produce } from "@/app/orders/columns";

type props = {
  product: Produce;
};

export function OrderQtyCounter({ product }: props) {
  console.log(product);
  return (
    <div className="flex gap-1">
      <Button variant="outline" size="icon">
        <Minus className="h-4 w-4" />
      </Button>
      <Input className="w-16" type="number" placeholder="0" min={0} max={7} />
      <Button variant="outline" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
