import BlurText from "./TextEffect/BlurText.tsx";
import { useTranslation } from "react-i18next";
import FaultyTerminal from "./FaultyTerminal/FaultyTerminal.tsx";
import { motion } from "framer-motion";
import { useTextEffectDelay } from "@/components/Header/TextEffect/useTextEffectDelay.ts";

export const Header = () => {
  const { visible } = useTextEffectDelay();
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center relative opacity-80 backdrop-blur-2xl z-0">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={0}
            flickerAmount={0}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#90EE90"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={0.35}
          />
          <div className="flex flex-col gap-4 justify-center items-center absolute z-30 p-4">
            <BlurText
              text={t("header.greeting")}
              delay={150}
              animateBy="words"
              direction="top"
              className="md:text-6xl text-white font-bold mb-2 text-4xl text-center"
            />
            {visible && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:text-2xl text-white font-bold text-lg text-center"
              >
                {t("header.myName")}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
