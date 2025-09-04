import "./App.css";
import { useErrorStore } from "./components/context/ErrorContext";
import ErrorManager from "./components/errors/error-manager";
import NotificationList from "./components/NotificationList";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ErrorTestButton from "./components/errors/ErrorTestButton";

function App() {
  const { message, isCriticalError } = useErrorStore();
  const shouldHideOutlet = message && isCriticalError();

  return (
    <div className="w-screen">
      <div>
        <NotificationList />

        <AnimatePresence mode="wait">
          {shouldHideOutlet ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ErrorManager />
            </motion.div>
          ) : (
            <motion.div
              key="outlet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ErrorManager />
              <Outlet />
            </motion.div>
          )}
          {/* // This is a test component to demo the new error handling
          // Remove this in production */}
          <ErrorTestButton />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
