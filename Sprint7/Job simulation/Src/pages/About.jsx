export default function About() {
    return (
        <div className="about-page" style={{
            maxWidth: "700px",
            margin: "40px auto",
            padding: "32px",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            textAlign: "center"
        }}>
            <h2 style={{ marginBottom: "18px" }}>About ShopEasy</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "22px" }}>
                <strong>ShopEasy</strong> is a modern demo e-commerce application built to demonstrate best practices in React development, rapid prototyping with Vite, and API simulation using JSON Server.
                <br /><br />
                This project is ideal for developers who want to learn how to build scalable, interactive, and responsive web applications from scratch.
            </p>
            <ul style={{ textAlign: "left", margin: "0 auto 24px", maxWidth: "600px", fontSize: "1rem", lineHeight: "1.7" }}>
                <li>
                    <strong>Frontend:</strong> Developed with <b>React</b> for component-based architecture, ensuring maintainability and reusability. The UI is styled for a seamless and intuitive user experience across devices.
                </li>
                <li>
                    <strong>Development Workflow:</strong> Utilizes <b>Vite</b> for lightning-fast development, instant hot module replacement, and optimized builds, making the development process efficient and enjoyable.
                </li>
                <li>
                    <strong>Backend Simulation:</strong> Employs <b>JSON Server</b> to mock RESTful API endpoints, enabling realistic data interactions without the need for a real backend during development.
                </li>
                <li>
                    <strong>Core Features:</strong> Includes product browsing, detailed product pages, cart management with quantity updates, and a fully responsive design that adapts to mobile and desktop screens.
                </li>
            </ul>
            <p style={{ color: "#888", fontStyle: "italic" }}>
                Note: ShopEasy is intended for educational and simulation purposes only. No real transactions are processed, and all data is for demonstration.
            </p>
        </div>
    );
}