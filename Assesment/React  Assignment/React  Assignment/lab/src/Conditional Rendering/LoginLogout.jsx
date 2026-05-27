import React, { useState } from "react";

function LoginLogout() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <button onClick={() => setIsLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </div>
  );
}

export default LoginLogout;
