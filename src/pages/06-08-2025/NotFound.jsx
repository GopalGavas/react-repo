import { useNavigate } from "react-router";
import { useState, useEffect, use } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [secLeft, setSecLeft] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecLeft((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div>
      <h2 style={{ color: "red", fontSize: "42px" }}>
        <strong>404</strong>: Not Found
      </h2>
      <p>The page you are looking for does not exists</p>
      <p>
        You will be redirected to homepage in {secLeft} second
        {secLeft !== 1 && "s"}...
      </p>
    </div>
  );
};

export default NotFound;
