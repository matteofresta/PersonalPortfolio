import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const MainContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        className="w-full h-full flex justify-center items-center flex-col"
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-black md:text-8xl text-xl font-bold my-5 text-center">
            {t("mainContent.title")}
          </h1>
          <span className="text-black md:text-2xl text-xl font-bold my-5 text-center">
            {t("mainContent.myExperience")}
          </span>
        </div>
        <motion.div
          initial={{ scale: 0, bottom: -10 }}
          animate={{ scale: 1, bottom: 0 }}
        >
          <div className="flex justify-center items-center flex-col">
            <img
              className="w-20 h-20"
              src="/Playwright-icon.png"
              alt="Playwright icon"
            />
            <h1 className="text-black text-2xl font-bold">Playwright</h1>
            <span className="w-48 text-center">
              {t("mainContent.playwright")}
            </span>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
      </motion.div>
    </>
  );
};
