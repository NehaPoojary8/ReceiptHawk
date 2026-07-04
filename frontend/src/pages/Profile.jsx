import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("user");

        navigate("/login");

    };

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "#f5f9ff",
            }}
        >

            <h1>Welcome to ReceiptHawk 🎉</h1>

            <p>You have successfully logged in.</p>

            <button
                onClick={handleLogout}
                style={{
                    marginTop: "20px",
                    padding: "12px 30px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#2563eb",
                    color: "white",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Logout
            </button>

        </div>

    );

}

export default Profile;