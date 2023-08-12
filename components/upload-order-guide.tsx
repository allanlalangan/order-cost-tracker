"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as xlsx from "xlsx";

export function UploadOrderGuide() {
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
      console.log(data.flat().filter((item) => item.PACK !== undefined));
    });
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="spreadsheet">Order Guide</Label>
      <Input
        onChange={(e) => onFileUpload(e)}
        id="spreadsheet"
        type="file"
        accept=".xlsx"
      />
    </div>
  );
}
