import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "flex-end",
                backgroundColor: "#1c1d1eff",
                alignItems: "center",
                padding: "10px",
                fontSize: "18px",
                fontWeight: "bold"
            }}>
            <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
            <Link to="/about" style={{ margin: "0 10px", color: "white" }}>About</Link>
            <Link to="/services" style={{ margin: "0 10px", color: "white" }}>Services</Link>
            <Link to="/contact" style={{ margin: "0 10px", color: "white" }}>Contact</Link>
        </nav>

    );

}

export default Navbar;
