import { useErrorStore } from "../context/ErrorContext";
import HighLevelError from "./high-level-error";
import LowLevelError from "./low-level-error";
import MedLevelError from "./med-level-error";
import NotAuthorizedError from "./not-authorized-error";
import NotFoundError from "./not-found-error";

const ErrorManager = () => {
  const { message, priority, code, clearError } = useErrorStore();
  

  if (message === "") {
    return null;
  }

  if (priority === "high") {
    return <HighLevelError error={message} code={code} onClose={clearError} />;
  } else if (priority === "medium") {
    return <MedLevelError error={message} code={code} onClose={clearError} />;
  } 
  else if (priority === "not-found") {
    return <NotFoundError error={message} code={code} onClose={clearError}/>;
  }
  else if (priority === "not-authorized") {
    return <NotAuthorizedError error={message} code={code} onClose={clearError}/>;
  }
  else {
    return <LowLevelError error={message} code={code}  onClose={clearError} />;
  }
};

export default ErrorManager;
