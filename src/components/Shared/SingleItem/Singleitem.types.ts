import { LucideIcon } from "lucide-react";

export type singleItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
  onClick?: () => void;
};
