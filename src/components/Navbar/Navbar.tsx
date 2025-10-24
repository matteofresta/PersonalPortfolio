import { useTranslation } from "react-i18next";
import { columnConfig } from "./config/columnConfig";
import Hamburger from "hamburger-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { LoadingSkeleton } from "@/components/ui/shadcn/skeleton";
import { useBurgerMenu } from "@/hooks/BurgerMenu/useBurgerMenu.ts";

export const Navbar = () => {
  const { t, i18n, ready } = useTranslation();
  const { isOpen, setOpen } = useBurgerMenu();

  return (
    <>
      <div className="w-full h-24 shadow-2xl flex fixed bg-white z-50 justify-between items-center px-10">
        <div></div>
        <div></div>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-10">
            {ready ? (
              <ul className="flex gap-4">
                {columnConfig.map((item) => (
                  <li key={item.key}>
                    <a className="text-black text-md" href={item.path}>
                      {t(item.label)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <LoadingSkeleton variant={"NavLinks"} />
            )}
          </div>

          <motion.div
            className="z-50 hidden md:block items-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="bg-white hover:scale-105 duration-300 cursor-pointer backdrop-blur-sm border border-gray-300 shadow-sm rounded-md px-4 py-2 w-24 text-center">
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
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-gray-200 z-50 fixed w-full h-full">
          <div className="flex justify-center pt-20">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white hover:scale-105 duration-300 cursor-pointer backdrop-blur-sm border border-gray-300 shadow-sm rounded-md px-4 py-2 w-24 text-center">
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
          </div>
          {ready ? (
            <ul className="flex flex-col gap-4 items-center pb-14 pt-4">
              {columnConfig.map((item) => (
                <li key={item.key}>
                  <a className="text-black text-2xl" href={item.path}>
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4">
              <LoadingSkeleton variant={"NavLinks"} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
