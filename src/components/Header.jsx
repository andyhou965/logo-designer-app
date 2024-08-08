import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-sm border">
      <a href="/" className="flex gap-1 items-center">
        <img src="/logo.svg" alt="logo" />
        <span className="text-primary font-bold text-md">LD</span>
      </a>
      <Button className="flex gap-2 items-center">
        <Download /> Download
      </Button>
    </div>
  );
};
export default Header;
