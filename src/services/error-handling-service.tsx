import { useErrorStore } from "@/components/context/ErrorContext";

const errorHandlingService = async (error: any, priority: any) => {
    let errorDetail = error?.response?.data?.detail || error?.response?.data?.error || error?.response?.data || "";
    let errorMessage = error?.message || "";
    let errorCode = error?.response?.status || "";

    if (error.response?.status === 404) {
        const { setError } = useErrorStore.getState();
        setError(errorDetail, "404", "not-found");
    }
    else if (error.response?.status === 401 || error.response?.status === 403) {
        const { setError } = useErrorStore.getState();
        setError(errorDetail, "401", "not-authorized");
    }
    else {
        const { setError } = useErrorStore.getState();
        setError(errorMessage + ". " + errorDetail, errorCode, priority);
        throw error;
    }
};

export { errorHandlingService };