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
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Home, ArrowLeft, AlertCircle } from "lucide-react";

const NotAuthorizedError = ({ error, code, onClose = () => { } }: any) => {
    const { language } = useLanguage();
    const navigate = useNavigate();

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
                            className="mx-auto mb-4 w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center"
                        >
                            <Shield className="w-8 h-8 text-orange-500" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                            {code && <span className="text-muted-foreground text-lg">Error {code}</span>}
                            <div className="mt-1">
                                {language === 'en' ? 'Access Denied' : 'الوصول مرفوض'}
                            </div>
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">
                            {language === 'en'
                                ? 'You do not have permission to access this resource. Please contact an administrator if you believe this is an error.'
                                : 'ليس لديك الإذن للوصول إلى هذا المورد. يرجى الاتصال بالمدير إذا كنت تعتقد أن هذا خطأ.'
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
                            className="flex flex-col sm:flex-row gap-3 w-full"
                        >
                            <Button
                                onClick={() => {
                                    onClose();
                                    navigate('/');
                                }}
                                className="flex-1 gap-2"
                                size="lg"
                            >
                                <Home className="w-4 h-4" />
                                {language === 'en' ? 'Go to Home' : 'الصفحة الرئيسية'}
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    onClose();
                                    navigate(-1);
                                }}
                                className="flex-1 gap-2"
                                size="lg"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                {language === 'en' ? 'Go Back' : 'رجوع'}
                            </Button>
                        </motion.div>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default NotAuthorizedError;