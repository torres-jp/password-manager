"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BarChart,
  DoorClosed,
  House,
  Icon,
  RectangleEllipsis,
} from "lucide-react";
import Link from "next/link";
import SingleItem from "../SingleItem/SingleItem";
import { dataSidebarElements } from "./SidebarRoutes.data";

export default function SidebarRoutes() {
  return (
    <div>
      <SingleItem href="/" label="Homepage" icon={House} />

      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          collapsible
          key={title}
          className="w.full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, icon: Icon, href }) => (
                <div key={item}>
                  <Link
                    href={href}
                    className="px-6 py-2 flex gap-2 items-center hover:bg-blue-100/20 duration-300 transition-all rounded-md"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
