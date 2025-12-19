import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Auth.css";
import { useAuth } from "../../context/AuthContext";
import Loader from "../Loader/Loader";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  const { refreshUser, setUser } = useAuth()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        isSignup ? "https://courier-plattform.onrender.com/api/auth/register" : "https://courier-plattform.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setUser(data)

      toast.success(
        isSignup ? "Account created successfully!" : "Welcome back!"
      );

      if (data.role == "admin") {
        toast.success("You are logged in as an admin");
      }

      navigate("/user-dashboard")
      window.location.reload()

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loader />
  return (
    <section className="auth">
      <div className="auth-card">
        <h2>{isSignup ? "Create Your Account" : "Welcome Back"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button disabled={loading}>
            {loading
              ? "Please wait..."
              : isSignup
                ? "Create Account"
                : "Login"}
          </button>
        </form>

        <p className="auth-toggle">
          {isSignup ? "Already have an account?" : "New here?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Create one"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Auth;
