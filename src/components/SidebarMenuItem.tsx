"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useState } from "react";

interface SideBarMenuItemsProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export default function SidebarMenuItem({
  path,
  icon,
  title,
  subTitle,
}: SideBarMenuItemsProps) {
  const currentPath = usePathname();

  // const [counter, setCounter] = useState(10)
  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
    ${path === currentPath ? " bg-blue-800" : ""}`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>

    // <div className="cursor-pointer display flex row align-items justify-content" onClick={ () => setCounter(counter + 1) }>
    //   <div>{icon}</div>
    //   <div className="flex flex-col align-items justify-content-center">
    //     <span className="text-lg font-bold leading-5 text-white">{counter}</span>
    //   </div>
    // </div>
  );
}
