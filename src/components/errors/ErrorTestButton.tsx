import { Button } from "@/components/ui/button";
import { useErrorStore } from "../context/ErrorContext";
import { useLanguage } from "../context/LanguageContext";

// This is a test component to demo the new error handling
// Remove this in production
const ErrorTestButton = () => {
    const { setError } = useErrorStore();
    const { language } = useLanguage();

    const triggerNotFoundError = () => {
        setError(
            language === "en"
                ? "The requested page could not be found.\n\nPlease check the URL and try again."
                : "لم يتم العثور على الصفحة المطلوبة.\n\nيرجى التحقق من الرابط والمحاولة مرة أخرى.",
            "404",
            "not-found"
        );
    };

    const triggerNotAuthorizedError = () => {
        setError(
            language === "en"
                ? "You do not have permission to access this resource.\n\nPlease contact your administrator for access."
                : "ليس لديك الإذن للوصول إلى هذا المورد.\n\nيرجى الاتصال بالمدير للحصول على إذن الوصول.",
            "403",
            "not-authorized"
        );
    };

    const triggerHighError = () => {
        setError(
            language === "en"
                ? "A critical system error has occurred.\n\nPlease try refreshing the page or contact support."
                : "حدث خطأ حرج في النظام.\n\nيرجى محاولة تحديث الصفحة أو الاتصال بالدعم.",
            "500",
            "high"
        );
    };

    const triggerLowError = () => {
        setError(
            language === "en"
                ? "A minor error occurred while processing your request."
                : "حدث خطأ بسيط أثناء معالجة طلبك.",
            "400",
            "low"
        );
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
            <Button onClick={triggerNotFoundError} variant="destructive" size="sm">
                Test 404
            </Button>
            <Button onClick={triggerNotAuthorizedError} variant="destructive" size="sm">
                Test 403
            </Button>
            <Button onClick={triggerHighError} variant="destructive" size="sm">
                Test 500
            </Button>
            <Button onClick={triggerLowError} variant="outline" size="sm">
                Test Low Error
            </Button>
        </div>
    );
};

export default ErrorTestButton;
