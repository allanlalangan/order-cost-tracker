import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UploadOrderGuide() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="spreadsheet">Order Guide</Label>
      <Input disabled id="spreadsheet" type="file" />
    </div>
  );
}
