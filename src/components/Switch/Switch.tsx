import { LuMoon, LuSun } from "react-icons/lu";
import { useSwitchLogic } from "@/hooks/Switch/useSwitchLogic.ts";

export const Switch = () => {
    const { theme, handleThemeSwitch } = useSwitchLogic();

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={theme === 'dark'}
                onChange={handleThemeSwitch}
            />
            <span className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                <span className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-100">
                    {theme === 'dark' ? <LuSun size={16} /> : <LuMoon size={16} />}
                </span>
                <span className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-100">
                    {theme === 'light' ? <LuMoon size={16} className={"opacity-60"} /> : <LuSun size={16} />}
                </span>
            </span>
        </label>
    );
};
