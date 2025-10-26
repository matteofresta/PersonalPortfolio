import {columnConfig} from "@/components/Navbar/config/columnConfig.ts";
import {t} from "i18next";


export const Footer = () => {
    return (
        <>
            <div className="w-full h-56 bg-gradient-to-r from-white from-55% to-green-300">
                <div>
                    <ul className="flex flex-col gap-1">
                        {columnConfig.map((item) => (
                            <li key={item.key}>
                                <a className="text-black text-sm" href={item.path}>
                                    {t(item.label)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
