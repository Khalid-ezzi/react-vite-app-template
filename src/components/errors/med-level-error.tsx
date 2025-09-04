import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useLanguage } from "../context/LanguageContext";
import { MdError } from "react-icons/md";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const MedLevelError = ({ error, onClose, code }: any) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Alert
            className="z-50 text-start border border-red-500"
            dir={language === "en" ? "ltr" : "rtl"}
          >
            <div className="flex justify-start items-center w-fit gap-2">
              <MdError className="text-red-500" size={20} color="red" />
              <AlertTitle className="text-xl text-red-500 text-nowrap">
                {language === "en" ? "Error" : "خطأ"} {code}
              </AlertTitle>
            </div>
            <AlertDescription className="text-start mt-4 flex flex-col gap-4">
              <div>
                {error}
                <br />
                {language === "en" ? "Please contact the administrator" : "يرجى الاتصال بمدير النظام"}
              </div>
              <div
                className="flex flex-wrap gap-4 mt-4"
              >
                <Button className="w-24" variant={"secondary"} onClick={handleClose}>
                  {language === "en" ? "Hide" : "إخفاء"}
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MedLevelError;
