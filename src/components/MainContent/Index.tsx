import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {Link} from "react-router";

export const MainContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        className="w-full h-full flex justify-center items-center flex-col dark:bg-primary-foreground"
      >
        <div className="w-full h-full flex flex-col justify-center items-center mt-40 dark:bg-primary-foreground bg-white">
          <h1 className="text-black dark:text-white md:text-8xl text-xl font-bold my-5 text-center">
            {t("mainContent.title")}
          </h1>
          <span className="text-black dark:text-white md:text-2xl text-xl font-bold my-5 text-center">
            {t("mainContent.myExperience")}
          </span>
        </div>
        <motion.div
          initial={{ scale: 0, bottom: -10 }}
          animate={{ scale: 1, bottom: 0 }}
          className="flex gap-4 mb-20"
        >
          <div className="flex justify-center items-center flex-col">
            <Link
                to="https://playwright.dev/"
            >
                <img
              className="w-20 h-20 hover:scale-110 duration-300"
              src="/Playwright-icon.png"
              alt="Playwright icon"
                />
            </Link>
            <h1 className="text-black dark:text-white text-2xl font-bold">Playwright</h1>
            <span className="w-48 text-center">
              {t("mainContent.playwright")}
            </span>
          </div>
          <div className="flex justify-center items-center flex-col">
            <Link
                to="https://tailwindcss.com/"
            >
                <img
                    className="w-20 h-20 hover:scale-110 duration-300 object-contain"
                    src="/Tailwind_CSS_Logo.svg.png"
                    alt="Tailwind css"
                />
              </Link>
              <h1 className="text-black text-2xl font-bold dark:text-white">Tailwind</h1>
              <span className="w-48 text-center">
              {t("mainContent.playwright")}
            </span>
          </div>
          <div></div>
          <div></div>
        </motion.div>
      </motion.div>
    </>
  );
};
