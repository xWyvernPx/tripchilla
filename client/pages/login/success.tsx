import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Success = () => {
  const route = useRouter();
  useEffect(() => {
    route.push("/");
  }, []);

  return <div>Login successfully</div>;
};

export default Success;
