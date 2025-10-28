import { columnConfig } from "@/components/Navbar/config/columnConfig.ts";
import { t } from "i18next";
import { Button } from "@/components/ui/shadcn/button/button.tsx";
import { useTextarea } from "@/hooks/Footer/useTextarea.ts";


export const Footer = () => {
    const { inputValue, handleInputChange, isTextarea } = useTextarea();

    return (
        <>
            <div>
                <div className={`w-full md:flex-row p-10 h-[50vh] items-start flex-col overflow-hidden px-20 bg-gradient-to-r dark:from-primary-foreground flex justify-between md:items-center from-white from-55% to-green-300 ${isTextarea ? 'md:h-[70vh]' : 'h-[40vh]'} transition-height duration-500 ease-in-out`}>
                    <div>
                        <ul className="flex flex-col gap-1">
                            {columnConfig.map((item) => (
                                <li key={item.key}>
                                    <a className="text-black dark:text-white text-sm" href={item.path}>
                                        {t(item.label)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col mt-8 md:mt-0 shadow-2xl p-6 md:w-[20vw] w-[60vw] h-auto bg-gradient-to-r from-white/10 from-55% to-black/20 bg-gray-300/50 backdrop-blur-md rounded-md">
                         <span
                             className="mb-4"
                         >{t("form.writeEmail")}</span>
                            <div className="flex flex-col gap-1 relative">
                                <span className="text-xs font-bold text-black dark:text-white absolute bottom-8">{t("form.email")}</span>
                                <input
                                    type="text"
                                    placeholder={t("form.emailAdress")}
                                    className="h-10 w-full p-4 rounded-md bg-gray-500 placeholder:opacity-35 placeholder:text-white da outline-none"
                                />
                            </div>
                            {!isTextarea ? (
                                <div className="flex flex-col gap-1 relative mt-2">
                                    <span className="text-xs font-bold text-black dark:text-white absolute bottom-10">{t("form.message")}</span>
                                    <input
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder={t("form.placeholder")}
                                        className="rounded-md w-full mt-2 p-4 h-12 bg-gray-500 placeholder:opacity-35 placeholder:text-white outline-none"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1 relative mt-2">
                                    <span className="text-xs font-bold text-black dark:text-white absolute top-0">{t("form.message")}</span>
                                    <textarea
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        className="rounded-md w-full mt-2 p-4 h-[10vw] bg-gray-500 placeholder:opacity-35 outline-none te"
                                        placeholder={t("form.placeholder")}
                                    />
                                </div>
                            )}

                        <div className="flex justify-end">
                            <Button
                                className="mt-2 text-black dark:text-black bg-gray-200 hover:bg-gray-300 w-32 h-10 cursor-pointer rounded-md"
                                type={"submit"}
                            >{t("form.send")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
