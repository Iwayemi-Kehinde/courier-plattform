import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./Dashboard.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Loader from "../Loader/Loader";


const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [weight, setWeight] = useState("");
  const [pricePerPound, setPricePerPound] = useState(0);
  const [total, setTotal] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch("https://courier-plattform.onrender.com/api/user/me", {
          credentials: "include",
        });

        if (!userRes.ok) {
          throw new Error("Unauthorized");
        }

        const userData = await userRes.json();

        const priceRes = await fetch("https://courier-plattform.onrender.com/api/pricing");
        const priceData = await priceRes.json();

        setProfile(userData);
        setPricePerPound(priceData.pricePerPound);
      } catch (err) {
        toast.error("Session expired, please login");
        setUser(null);
        navigate("/auth");
      }
    };

    fetchData();
  }, []);

  if (!profile) return <Loader />


  const calculate = () => {
    if (!weight || weight <= 0) {
      toast.error("Enter a valid weight");
      return;
    }
    setTotal(weight * pricePerPound);
  };

  const logout = async () => {
    await fetch("https://courier-plattform.onrender.com/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    toast.success("Logged out");
    setUser(null);
    navigate("/auth");
  };

  if (!profile) return null;

  return (
    <section className="dashboard">
      <div className="dashboard-container">

        <h1>Welcome, {profile.fullName}</h1>

        {/* PROFILE */}
        <div className="dash-card">
  <div className="card-header">
    <h2>Profile</h2>
    <FaEdit
      className="edit-icon"
      onClick={() => setShowEditModal(true)}
    />
  </div>

  <p><strong>Name:</strong> {profile.fullName}</p>
  <p><strong>Email:</strong> {profile.email}</p>
</div>

{showEditModal && (
  <EditProfileModal
    user={profile}
    onClose={() => setShowEditModal(false)}
    onUpdated={(updatedUser) => setProfile(updatedUser)}
  />
)}


        {/* SHIPPING INFO */}
        <div className="dash-card">
          <h2>Your USA Shipping Address</h2>
          <p><strong>Customer ID:</strong> {profile.customerId}</p>

          <pre className="address-box">{profile.usaAddress}</pre>

          <button
            className="dash-btn"
            onClick={() => {
              navigator.clipboard.writeText(profile.usaAddress);
              toast.success("Address copied");
            }}
          >
            Copy Address
          </button>
        </div>

        {/* CALCULATOR */}
        <div className="dash-card">
          <h2>Shipping Cost Calculator</h2>
          <p>Price per pound: <strong>${pricePerPound}</strong></p>

          <input
            type="number"
            placeholder="Weight in lbs"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <button className="dash-btn" onClick={calculate}>
            Calculate
          </button>

          {total !== null && (
            <p className="total">
              Estimated Cost: <strong>${total.toFixed(2)}</strong>
            </p>
          )}
        </div>

        {/* ADMIN ACCESS */}
        {profile?.role === "admin" && (
          <div className="admin-access">
            <p>You have admin privileges</p>
            <Link to="/admin">
              <button className="dash-btn">Go to Admin Dashboard</button>
            </Link>
          </div>
        )}

        <button className="dash-btn logout" onClick={logout}>
          Logout
        </button>

      </div>
    </section>
  );
};

export default Dashboard;
