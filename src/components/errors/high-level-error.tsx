import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";

const HighLevelError = ({ error, code, onClose = () => { } }: any) => {
  const { language } = useLanguage();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="text-center shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center"
            >
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </motion.div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {code && <span className="text-muted-foreground text-lg">Error {code}</span>}
              <div className="mt-1">
                {language === "en" ? "System Error" : "خطأ في النظام"}
              </div>
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              {language === "en"
                ? "An unexpected error has occurred. Our team has been notified and is working to resolve this issue."
                : "حدث خطأ غير متوقع. تم إشعار فريقنا ونحن نعمل على حل هذه المشكلة."
              }
            </CardDescription>
          </CardHeader>

          {error && (
            <CardContent className="pb-6">
              <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 whitespace-pre-line">
                {error}
              </div>
            </CardContent>
          )}

          <CardFooter className="flex flex-col gap-3 pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground mb-3"
            >
              {language === "en"
                ? "Please contact the administrator if this issue persists"
                : "يرجى الاتصال بمدير النظام إذا استمرت هذه المشكلة"
              }
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button
                onClick={handleRefresh}
                className="flex-1 gap-2"
                size="lg"
              >
                <RefreshCw className="w-4 h-4" />
                {language === "en" ? "Refresh Page" : "تحديث الصفحة"}
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
                size="lg"
              >
                {language === "en" ? "Close" : "إغلاق"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default HighLevelError;
