import { useEffect } from "react";
import { useAuth } from "../hooks/Authentication";
import { Outlet, useNavigate } from "react-router-dom";

const AuthenticatedRoute = () => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  console.log(isAuth)

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate])
  return <Outlet />
}

export default AuthenticatedRoute