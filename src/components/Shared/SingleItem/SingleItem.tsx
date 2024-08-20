import Link from "next/link";
import { singleItemProps } from "./Singleitem.types";

export default function SingleItem(props: singleItemProps) {
  const { label, icon: Icon, onClick, href } = props;
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex gap-2 items-center p-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md"
    >
      <div className="bg-blue-100/20 p-2  rounded-md">
        <Icon size={20} />
      </div>
      {label}
    </Link>
  );
}
