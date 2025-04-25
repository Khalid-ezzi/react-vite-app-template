import { useNotificationStore } from "./context/NotificationContext";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MdError } from "react-icons/md";
import { useLanguage } from "./context/LanguageContext";
const NotificationList: React.FC = () => {
    const { notifications, removeNotification } = useNotificationStore();
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = (id: any) => {
        setIsVisible(false);
        setTimeout(() => {
            removeNotification(id)
        }, 300);
    };

    return (
        <>
            {notifications.map(({ id, message, type }) => (
                type === "temporary" ?
                    <div className="fixed top-4 right-4 w-80 space-y-2 z-50">
                        <Alert
                            className={`z-50 text-start border transition duration-300 ease-in-out transform 
                            ${isVisible ? "animate-fade-in-down" : "animate-fade-out-up"}
                            ${type === "temporary" ? "" : "border-red-500 "}
                            `}
                        >
                            <AlertDescription className="text-start mt-4 flex flex-col gap-4">
                                <div>
                                    {message}
                                </div>
                                {type === "temporary" && (
                                    <Button
                                        className="w-24"
                                        variant={"secondary"}
                                        onClick={() => handleClose(id)}
                                    >
                                        {language === "en" ? "Hide" : "إخفاء"}
                                    </Button>
                                )}
                            </AlertDescription>
                        </Alert>
                    </div>
                    :
                    <Alert
                        className={`text-start border transition duration-300 ease-in-out transform border-red-500
                    `}
                    >
                        <AlertDescription className="text-start mt-4 flex flex-col gap-4">
                            <div>
                                {message}
                            </div>
                        </AlertDescription>
                    </Alert>
            ))}
        </>
    );
};

export default NotificationList;
