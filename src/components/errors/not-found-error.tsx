import { useLanguage } from "@/components/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "../loading/loading-icon";

const NotFoundError = ({ error, code, onClose }: any) => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleNavigate = (path: any) => {
        setLoading(true);
        const idx = window.history.state?.idx ?? 0;
        if (idx > 0 && path === -1) {
            navigate(-1);
        } else {
            navigate("/");
        }
        setTimeout(() => {
             onClose();
        }, 50);
    }
    
    return (
        <div
            className="h-screen w-full fixed z-50 left-0 top-0 bg-black bg-opacity-90 flex flex-col"
        >
            <Card
                className="m-3 max-w-xl h-auto flex flex-col justify-content-center align-items-center m-auto"
            >
                <CardHeader
                    className="w-full flex justify-content-center align-items-center m-auto"
                >
                    <CardTitle
                        className="text-2xl font-bold flex justify-content-center align-items-center m-auto"
                    >
                        {language === 'en' ? 'Page not found' : 'الصفحة غير موجودة'}
                    </CardTitle>
                </CardHeader>
                <CardContent
                    className="w-full flex flex-col justify-content-center align-items-center m-auto"
                >
                    {Array.isArray(error) ? (
                        error.map((err: any, index: number) => (
                            <div key={index} className="text-center">
                                {typeof err === "object" && err !== null
                                    ? Object.entries(err).map(([key, value]) => (
                                        <p key={key}>
                                            <strong>{key}:</strong> {String(value)}
                                        </p>
                                    ))
                                    : <p>{String(err)}</p>}
                            </div>
                        ))
                    ) : typeof error === "object" && error !== null ? (
                        Object.entries(error).map(([key, value]) => (
                            <p key={key}>
                                <strong>{key}:</strong> {String(value)}
                            </p>
                        ))
                    ) : (
                        <p>{String(error)}</p>
                    )}
                </CardContent>

                <CardFooter
                    className="w-full flex justify-content-center align-items-center m-auto"
                >
                    <CardDescription
                        className="text-lg font-medium flex justify-content-center align-items-center m-auto"
                    >
                    </CardDescription>
                    <div
                        className="flex flex-col justify-content-center align-items-center m-auto w-full gap-4"
                    >
                        <Button
                            onClick={() => {
                                handleNavigate('/')
                            }}
                            disabled={loading}
                        >
                            {loading ? <LoadingIcon /> : language === 'en' ? 'Go Home' : 'العودة للصفحة الرئيسية'}

                        </Button>
                        <Button
                            onClick={() => {
                                handleNavigate(-1)
                            }}
                            variant={"secondary"}
                            disabled={loading}
                        >
                            {loading ? <LoadingIcon /> : language === 'en' ? 'Go Back' : 'العودة للخلف'}
                        </Button>
                    </div>

                </CardFooter>
            </Card>
        </div>
    );
};

export default NotFoundError;