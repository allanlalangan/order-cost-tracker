import { Produce, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Produce[]> {
  // Fetch data from your API here.
  return [
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
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
