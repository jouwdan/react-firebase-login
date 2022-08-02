import { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.signOut().then(navigate("/"));
  });
};
export default Logout;
