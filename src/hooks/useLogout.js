import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      setAuth({});
      const response = await axios.get("/auth/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;