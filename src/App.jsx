import { useEffect } from "react";
import { useCheckUserQueryQuery } from "./redux/api/authApi";
import RouteController from "./routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/authSlices";

function App() {
  const location = useLocation();
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { data, isError, isLoading, isSuccess } = useCheckUserQueryQuery();
  useEffect(() => {
    if (isError) {
      if (
        !(location.pathname === "/auth/sign-up") &&
        !(location.pathname === "/auth/sign-in") &&
        !(location.pathname === "/auth/otp")
      ) {
        navigete(`/auth/sign-in?callback-url=${location.pathname}`);
      }
    }
    if (isSuccess) {
      dispatch(setUser(data.payload));
      console.log(user);
    }
  }, [isError, isSuccess, user]);
  return <>{isLoading ? "Loadng. . ." : <RouteController />}</>;
}

export default App;
