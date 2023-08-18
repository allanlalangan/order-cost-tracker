"use client";

import { charliesColumns, ogcColumns } from "@/app/orders/columns";
import { CharliesDataTable } from "@/app/orders/ch-data-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as xlsx from "xlsx";
import { OGCDataTable } from "../ogc-data-table";

export default function UploadOrderPage() {
  const { toast } = useToast();
  const [charliesData, setCharliesData] = useState(null);
  const [OGCData, setOGCData] = useState(null);

  const onFileUpload = (e: any) => {
    const file = e.target.files[0];

    if (!!file) {
      readExcel(file);
    }
  };

  const readExcel = (file: any) => {
    const promise = new Promise((resolve, reject) => {
      if (
        file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        toast({
          description: "Please upload a valid spreadsheet",
          variant: "destructive",
        });
        reject("Invalid file type");
      } else {
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
          toast({
            description: "Please upload a valid spreadsheet",
            variant: "destructive",
          });
          reject(error);
        };
      }
    });

    promise.then((data: any) => {
      if (data[0]["OGC "]) {
        setOGCData(
          data
            .filter((item: any) => item.PACK !== undefined)
            .map((item: any) => ({
              name: item["OGC "].trim(),
              pack: item.PACK,
              size: item["   SIZE"].trim(),
              price: item["    PRICE"],
            }))
        );
      } else if (data[0]["      ITEM DESCRIPTION         "]) {
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
      } else {
        toast({
          description: "Spreadsheet is not in the correct format",
          variant: "destructive",
        });
        return null;
      }
      toast({
        description: "Spreadsheet uploaded successfully",
      });
    });
  };
  return (
    <section className="container py-10 flex flex-col">
      <div className="container mb-4 px-0">
        <Label className="" htmlFor="spreadsheet">
          Upload Order Guide
        </Label>
        <div className="flex gap-2">
          <Input
            className="cursor-pointer"
            onChange={(e) => onFileUpload(e)}
            id="spreadsheet"
            type="file"
            accept=".xlsx"
          />
          <Button
            onClick={() => {
              setCharliesData(null);
              setOGCData(null);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="container px-0">
        {!!charliesData && (
          <CharliesDataTable columns={charliesColumns} data={charliesData} />
        )}
        {!!OGCData && <OGCDataTable columns={ogcColumns} data={OGCData} />}
      </div>
    </section>
  );
}
