import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export function NavMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Orders</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/orders">Upload Order Guide</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
