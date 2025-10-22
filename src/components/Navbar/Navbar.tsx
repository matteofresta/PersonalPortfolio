import { useTranslation } from "react-i18next";
import { columnConfig } from "./config/columnConfig";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { LoadingSkeleton } from "@/components/ui/shadcn/skeleton";

export const Navbar = () => {
  const { t, i18n, ready } = useTranslation();

  return (
    <>
      <div className="w-full h-24 shadow-2xl flex justify-between items-center px-10">
        <div></div>
        <div></div>
        <div className="flex items-center gap-10">
          {ready ? (
            <div>
              <ul className="flex gap-4">
                {columnConfig.map((item) => (
                  <li key={item.key}>
                    <a className="text-black text-md" href={item.path}>
                      {t(item.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <LoadingSkeleton variant={"NavLinks"} />
          )}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white/80 hover:scale-105 duration-300 cursor-pointer backdrop-blur-sm border border-gray-300/50 shadow-sm rounded-md px-4 py-2 w-24 text-center">
                {i18n.language.toUpperCase()}
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-gray-500/20 backdrop-blur-lg mt-2 rounded-xl flex flex-col gap-2 border-none shadow-2xl w-40 p-2">
                <DropdownMenuItem
                  className="focus:bg-white/20 bg-white/80 rounded-md duration-400 p-2 cursor-pointer"
                  onSelect={() => i18n.changeLanguage("de")}
                >
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="focus:bg-white/20 bg-white/80 rounded-md duration-400 p-2 cursor-pointer"
                  onSelect={() => i18n.changeLanguage("en")}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="focus:bg-white/20 bg-white/80 rounded-md duration-400 p-2 cursor-pointer"
                  onSelect={() => i18n.changeLanguage("it")}
                >
                  Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>
    </>
  );
};
