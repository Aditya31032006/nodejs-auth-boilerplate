import { Link } from "react-router"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from "../hook/useForm"
import useAuth from "../hook/useAuth"
import PasswordField from "../components/PasswordField"
import "../styles/auth.scss"




const Register = () => {
  const { formValues, handleChange } = useForm({
    email: "",
    fullname: "",
    password: ""
  })

  const { RegisterUser } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    RegisterUser(formValues)
  }

  return (
    <main className="auth-page">
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <div className="auth-card auth-card--register">

        {/* ── Left branding panel ── */}
        <div className="register-left">
          <div className="auth-avatar">
          </div>
          <h1 className="auth-heading">Create Account</h1>
          <p className="auth-subheading">Join KSV procurement portal</p>

          <p className="auth-redirect" style={{ marginTop: "auto", paddingTop: 24 }}>
            Already have an account?<br />
            <Link to="/login">Sign in</Link>
          </p>
        </div>

        {/* ── Vertical divider ── */}
        <div className="register-divider" />

        {/* ── Right form panel ── */}
        <div className="register-right">
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-scroll">

              {/* Full Name */}
              <div className="auth-field">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <input
                    required
                    type="text"
                    name="fullname"
                    placeholder="John Appleseed"
                    value={formValues.fullname || ""}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="auth-field">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formValues.email || ""}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
              </div>

              
              {/* Password */}
              <div className="auth-field">
                <label>Password</label>
                <PasswordField onChange={handleChange} placeholder="Minimum 6 characters" />
              </div>

            </div>{/* end auth-form-scroll */}

            {/* Submit */}
            <button type="submit" className="auth-btn" style={{ marginTop: 14, flexShrink: 0 }}>
              Create Account
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}

export default Register