"use client";

import { servicesData } from "@/app/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <ul className="list-unstyled serivces-widget-list">
      {servicesData.map(({ id, title, link }) => {
        return (
          <li
            key={`service-item` + id}
            className={`pyloan-service-list-arrow ${
              pathname.endsWith(link) ? "service-active" : ""
            }`}
          >
            <Link href={link}>
              {title}
              <i className="fas fa-chevron-right"></i>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Sidebar;
