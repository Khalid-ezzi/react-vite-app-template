import { useErrorStore } from "@/components/context/ErrorContext";

const errorHandlingService = async (error: any, priority:any, skipErrorHandling?: boolean) => {
    let errorDetail = error?.response?.data?.detail ||error?.response?.data?.error ||error?.response?.data ||  '';
    let errorMessage = error?.message || "";
    let errorCode = error?.response?.status || "";

    if(skipErrorHandling) {
        throw error;
    }
    else if (error.response?.status === 404) {
        const { setError } = useErrorStore.getState();
        setError("لم يتم العثور على الصفحة التي تبحث عنها.  \n\n The page you are looking for could not be found.", "404", "not-found");
        throw error;
    }
    else if (error.response?.status === 401 || error.response?.status === 403) {
        const { setError } = useErrorStore.getState();
        setError("ليس لديك الإذن للوصول إلى هذه الصفحة.  \n\n You are not authorized to access this resource.", "401", "not-authorized");
        throw error;
    }
    else {
        const { setError } = useErrorStore.getState();
        setError(errorMessage + ". " + errorDetail, errorCode, priority);
        throw error;
    }
};

export { errorHandlingService };