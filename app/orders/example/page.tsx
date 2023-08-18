import { CharliesItem, charliesColumns } from "../columns";
import { CharliesDataTable } from "../ch-data-table";

async function getData(): Promise<CharliesItem[]> {
  // Fetch data from your API here.
  return [
    {
      name: "Apple Fuji",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 49.99,
    },
    {
      name: "Apple Pink Lady",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 39.99,
    },
    {
      name: "Apple Granny Smith",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 59.99,
    },
    {
      name: "Apple Gala",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 29.99,
    },
    {
      name: "Apple Honeycrisp",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 69.99,
    },
    {
      name: "Banana Ripe",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 19.99,
    },
    {
      name: "Peach Yellow",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 29.99,
    },
    {
      name: "Lettuce Green Leaf",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 29.99,
    },
    {
      name: "Lettuce Red Leaf",
      item_number: "1",
      pack: 50,
      size: "1",
      weight: 1,
      price: 29.99,
    },
    {
      name: "Herbs Sage",
      item_number: "1",
      pack: 6,
      size: "1",
      weight: 1,
      price: 19.99,
    },
    {
      name: "Herbs Rosemary",
      item_number: "1",
      pack: 6,
      size: "1",
      weight: 1,
      price: 19.99,
    },
    {
      name: "Peppers Sweet Mini",
      item_number: "1",
      pack: 10,
      size: "1",
      weight: 1,
      price: 29.99,
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <CharliesDataTable columns={charliesColumns} data={data} />
    </div>
  );
}
