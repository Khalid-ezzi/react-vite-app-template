import './App.css'
import { Outlet } from "react-router-dom";
import ErrorManager from './components/errors/error-manager';
import NotificationList from './components/NotificationList';

function App() {
  return (
    <>
        <ErrorManager />
        <NotificationList />
        <Outlet />
    </>
  )
}

export default App
