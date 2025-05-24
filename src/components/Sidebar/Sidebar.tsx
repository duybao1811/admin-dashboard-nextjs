"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import CategoryIcon from "@/assets/icons/category.svg";
import ChartIcon from "@/assets/icons/chart.svg";

const menu = [
  {
    name: "Dashboard",
    icon: (color: string) => <CategoryIcon style={{ color: color }} />,
    href: "/",
  },
  {
    name: "Analytics",
    icon: (color: string) => <ChartIcon style={{ color: color }} />,
    href: "/analytics",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className={"pt-12 flex flex-col items-center bg-background min-h-screen"}
    >
      <div className={"flex items-center gap-4 mb-12"}>
        <Image src={"/images/logo.svg"} alt={"logo"} width={42} height={42} />
        <p className={"text-title font-semibold"}>Base</p>
      </div>

      <div className={"flex flex-col gap-1"}>
        {menu.map((item, index) => {
          const active = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={index}
              className={"flex items-center gap-4 mb-6 py-3"}
            >
              <div className={"w-6 h-6"}>
                {item.icon(
                  active ? "var(--color-primary)" : "var(--color-sidebar-icon)",
                )}
              </div>
              <p
                className={clsx(
                  " font-semibold",
                  active ? "text-primary" : "text-sidebar-text",
                )}
              >
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
