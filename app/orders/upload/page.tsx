"use client";

import { columns } from "@/app/orders/columns";
import { DataTable } from "@/app/orders/data-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import * as xlsx from "xlsx";

export default function UploadOrderPage() {
  const [charliesData, setCharliesData] = useState(null);
  const onFileUpload = (e: any) => {
    const file = e.target.files[0];
    readExcel(file);
  };

  const readExcel = (file: any) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        const bufferArray = e?.target?.result;

        const wb = xlsx.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = xlsx.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data: any) => {
      if (!data[0]["      ITEM DESCRIPTION         "]) return;
      setCharliesData(
        data
          .flat()
          .filter((item: any) => item.PACK !== undefined)
          .map((item: any) => ({
            name: item["      ITEM DESCRIPTION         "].trim(),
            item_number: item["    ITEM #"].trim(),
            pack: item.PACK,
            size: item["   SIZE"].trim(),
            weight: item["    WEIGHT"],
            price: item["    PRICE"].toFixed(2),
          }))
      );
    });
  };
  return (
    <section className="container py-10 flex flex-col">
      <div className="container mb-4 px-0">
        <Label className="" htmlFor="spreadsheet">
          Upload Order Guide
        </Label>
        <Input
          onChange={(e) => onFileUpload(e)}
          id="spreadsheet"
          type="file"
          accept=".xlsx"
        />
      </div>
      <div className="container px-0">
        {charliesData === null ? (
          <span className="mx-auto">Please upload valid spreadsheet</span>
        ) : (
          <DataTable columns={columns} data={charliesData} />
        )}
      </div>
    </section>
  );
}
