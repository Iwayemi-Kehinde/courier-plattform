import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./AdminDashboard.css";
import Loader from "../Loader/Loader";

const AdminDashboard = () => {
    const [price, setPrice] = useState("");
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchPricing();
        fetchUsers();
    }, []);

    const fetchPricing = async () => {
        setLoading(true)
        const res = await fetch("https://courier-plattform.onrender.com/api/pricing");
        const data = await res.json();
        setPrice(data.pricePerPound);
        setLoading(false)
    };

    const fetchUsers = async () => {
        setLoading(true)
        const res = await fetch("https://courier-plattform.onrender.com/api/user", {
            credentials: "include",
        });

        const data = await res.json();
        setLoading(false)
        setUsers(data);
    };

    const updatePrice = async () => {
        try {
            setLoading(true)
            const res = await fetch("https://courier-plattform.onrender.com/api/pricing", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ pricePerPound: price }),
            });

            if (!res.ok) throw new Error();
            setLoading(false)
            toast.success("Price updated successfully");
        } catch {
            toast.error("Failed to update price");
        }
    };

    const makeAdmin = async (id) => {
        try {
            setLoading(true)
            const res = await fetch(`https://courier-plattform.onrender.com/api/user/make-admin/${id}`, {
                method: "PUT",
                credentials: "include",
            });

            if (!res.ok) throw new Error();

            toast.success("User promoted to admin");
            fetchUsers(); // refresh list
            setLoading(false)
        } catch {
            toast.error("Failed to promote user");
        }
    };

    const removeAdmin = async (id) => {
        try {
            setLoading(true)
            const res = await fetch(`https://courier-plattform.onrender.com/api/user/remove-admin/${id}`, {
                method: "PUT",
                credentials: "include",
            });

            if (!res.ok) throw new Error();
            setLoading(false)
            toast.success("Admin privilege removed");
            fetchUsers();

        } catch {
            toast.error("Failed to remove admin");
        }
    };

if(loading) return <Loader />

    return (
        <section className="admin">
            <h1>Admin Dashboard</h1>

            {/* PRICING */}
            <div className="admin-card">
                <h2>Price Per Pound</h2>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button onClick={updatePrice}>Update Price</button>
            </div>

            {/* USERS TABLE */}
            <div className="admin-card">
                <h2>Registered Users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((u) => (
                            <tr key={u._id}>
                                <td>{u.fullName}</td>
                                <td>{u.email}</td>
                                <td>
                                    <span
                                        className={`role-badge ${u.role === "admin" ? "role-admin" : "role-user"
                                            }`}
                                    >
                                        {u.role}
                                    </span>
                                </td>
                                <td>
                                    {u.role === "admin" ? (
                                        <button
                                            className="remove-admin-btn"
                                            onClick={() => removeAdmin(u._id)}
                                        >
                                            Remove Admin
                                        </button>
                                    ) : (
                                        <button
                                            className="make-admin-btn"
                                            onClick={() => makeAdmin(u._id)}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </section>
    );
};

export default AdminDashboard;
