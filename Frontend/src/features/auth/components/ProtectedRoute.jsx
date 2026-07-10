import { Navigate, Outlet, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../auth.context";

export function PublicOnlyRoute() {
  const { user, checkingAuth } = useContext(AuthContext);
  const location = useLocation();

  if (checkingAuth) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#e8eaf0",
          color: "#3a3d52",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid #c8cad4",
            borderTop: "5px solid #5b6af0",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <p style={{ marginTop: "20px", fontSize: "16px", color: "#7a7f9a" }}>
          Loading...
        </p>
      </div>
    );
  }

  if (user && location.pathname !== "/success") {
    return <Navigate to="/success" replace />;
  }

  return <Outlet />;
}
