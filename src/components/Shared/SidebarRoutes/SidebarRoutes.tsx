"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart, DoorClosed, House, RectangleEllipsis } from "lucide-react";
import Link from "next/link";
import SingleItem from "../SingleItem/SingleItem";

export default function SidebarRoutes() {
  return (
    <div>
      <SingleItem href="/" label="Homepage" icon={House} />
    </div>
  );
}
