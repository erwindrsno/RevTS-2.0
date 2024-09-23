import { useEffect } from "react";
import { useAuth } from "../hooks/Authentication";
import { Outlet, useNavigate } from "react-router-dom";

const AuthenticatedRoute = () => {
  const {sessionStorage} = useAuth();
  const navigate = useNavigate();
  const JSON_display_name = JSON.parse(sessionStorage.getItem('display_name'));
  const display_name = JSON_display_name.key;

  useEffect(() => {
    if (display_name == "") {
      console.log("triggered");
      navigate('/');
    }
  }, [display_name, navigate])
  return <Outlet />
}

export default AuthenticatedRoute