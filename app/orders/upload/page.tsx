"use client";

import { columns } from "@/app/orders/columns";
import { DataTable } from "@/app/orders/data-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, FileWarning, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import * as xlsx from "xlsx";

export default function UploadOrderPage() {
  const { toast } = useToast();
  const [charliesData, setCharliesData] = useState(null);
  const [OGCData, setOGCData] = useState(null);
  const [error, setError] = useState(false);

  const onFileUpload = (e: any) => {
    const file = e.target.files[0];
    setError(false);
    setCharliesData(null);
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
        setError(true);
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
          setError(true);
          reject(error);
        };
      }
    });

    promise.then((data: any) => {
      if (data[0]["OGC "]) {
        console.log(
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
        toast({
          description: "Spreadsheet uploaded successfully",
        });
      } else {
        setError(true);
        return null;
      }
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
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Please upload a valid spreadsheet
            </AlertDescription>
          </Alert>
        )}
        {!!charliesData && <DataTable columns={columns} data={charliesData} />}
      </div>
    </section>
  );
}
