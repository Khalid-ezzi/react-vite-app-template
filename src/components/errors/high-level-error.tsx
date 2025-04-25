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
const HighLevelError = ({ error, code, onClose }: any) => {
  const { language } = useLanguage();
  return (
    <div className="h-screen w-full fixed z-50 left-0 top-0 bg-black bg-opacity-90 flex flex-col">
      <Card className="m-3 max-w-xl h-auto flex flex-col justify-content-center align-items-center m-auto">
        <CardHeader className=" w-full flex justify-content-center align-items-center m-auto">
          <CardTitle className="text-2xl font-bold flex flex-col justify-content-center align-items-center m-auto">
            <MdOutlineErrorOutline
              className="text-red-500 mx-auto my-2"
              size={30}
            />
            {language === "en" ? "Error" : "خطأ"} {code}
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full flex justify-content-center align-items-center m-auto">
          <CardDescription className="text-lg font-medium flex justify-content-center align-items-center m-auto">
            {error}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full flex flex-col justify-content-center align-items-center m-auto">
          <CardDescription className="text-lg font-medium flex justify-content-center align-items-center m-auto">
            {
              language === "en"
                ? "Please contact the administrator"
                : "يرجى الاتصال بمدير النظام"
            }
          </CardDescription>
          <Button className="m-3" onClick={onClose}>
            {language === "en" ? "Close" : "إغلاق"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HighLevelError;
