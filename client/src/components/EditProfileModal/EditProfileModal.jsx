import { useState } from "react";
import toast from "react-hot-toast";
import "./EditProfileModal.css";

const EditProfileModal = ({ user, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    address: user.usaAddress,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://courier-plattform-server.pxxl.click/api/user/update-profile", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Update failed");

      toast.success("Profile updated successfully");
      onUpdated(data); // update dashboard + context
      onClose();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h2>Edit Profile</h2>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="USA Address"
          rows={4}
        />

        <div className="modal-actions">
          <button className="btn secondary" onClick={onClose}>
            Cancel
          </button>

          <button className="btn primary" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
