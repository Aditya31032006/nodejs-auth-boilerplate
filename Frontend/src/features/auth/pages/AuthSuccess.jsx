import useAuth from "../hook/useAuth";
import "../styles/auth.scss";

const AuthSuccess = () => {
  const { LogoutUser } = useAuth();

  return (
    <main className="auth-success">
      <section className="auth-success-card">
        <div className="success-badge">✓</div>
        <h1>Authentication successful</h1>
        <p>Your account is ready and you have been signed in successfully.</p>
        <div className="auth-success-actions">
          <button type="button" onClick={LogoutUser}>
            Logout
          </button>
        </div>
      </section>
    </main>
  );
};

export default AuthSuccess;
