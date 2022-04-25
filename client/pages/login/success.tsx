import React, { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    window.close();
  }, []);

  return <div>Login successfully</div>;
};

export default Success;
