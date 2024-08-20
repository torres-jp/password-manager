import { Icon } from "lucide-react";
import Link from "next/link";

export default function SingleItem() {
  return (
    <Link
      href="/"
      className="flex gap-2 items-center p-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md"
    >
      <div className="bg-blue-100/20 p-2  rounded-md">
        <Icon size={20} />
      </div>
    </Link>
  );
}
