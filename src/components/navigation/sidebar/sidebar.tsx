import { HomeIcon, ListRestartIcon, Smile, Tags } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { aboutPath, homePath, readingListPath, tagsPath } from "@/paths";

const SidebarItems = [
  {
    href: homePath,
    icon: <HomeIcon />,
    label: "Home",
  },
  {
    href: readingListPath,
    icon: <ListRestartIcon />,
    label: "Reading List",
  },
  {
    href: tagsPath,
    icon: <Tags />,
    label: "Tags",
  },
  {
    href: aboutPath,
    icon: <Smile />,
    label: "About",
  },
];

export const Sidebar = () => {
  return (
    <aside className="order-1 bg-transparent w-full  py-4 px-3 ">
      <ul>
        {SidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </aside>
  );
};
