import React from 'react';

export default function Contact() {
    return (
        <div
            className="contact-page"
            style={{
                maxWidth: "520px",
                margin: "48px auto",
                padding: "40px 32px",
                borderRadius: "18px",
                boxShadow: "0 8px 32px rgba(44, 62, 80, 0.13)",
                textAlign: "center",
            }}
        >
            <h2 style={{ color: "#2d3436", fontWeight: 700, marginBottom: "8px" }}>Contact Us</h2>
            <p style={{ fontSize: "1.15rem", marginBottom: "28px", color: "#636e72" }}>
                Have questions or feedback? Reach out to us!
            </p>
            <form>
                <input
                    type="text"
                    placeholder="Your Name"
                    style={{
                        width: "92%",
                        padding: "12px",
                        margin: "12px 0",
                        borderRadius: "8px",
                        border: "1.5px solid #b2bec3",
                        fontSize: "1rem",
                        background: "#fff",
                        transition: "border 0.2s",
                        outline: "none",
                    }}
                /><br />
                <input
                    type="email"
                    placeholder="Your Email"
                    style={{
                        width: "92%",
                        padding: "12px",
                        margin: "12px 0",
                        borderRadius: "8px",
                        border: "1.5px solid #b2bec3",
                        fontSize: "1rem",
                        background: "#fff",
                        transition: "border 0.2s",
                        outline: "none",
                    }}
                /><br />
                <textarea
                    placeholder="Your Message"
                    rows={5}
                    style={{
                        width: "92%",
                        padding: "12px",
                        margin: "12px 0",
                        borderRadius: "8px",
                        border: "1.5px solid #b2bec3",
                        fontSize: "1rem",
                        background: "#fff",
                        resize: "vertical",
                        transition: "border 0.2s",
                        outline: "none",
                    }}
                /><br />
                <button
                    type="submit"
                    style={{
                        padding: "12px 32px",
                        borderRadius: "8px",
                        background: "linear-gradient(90deg, #0984e3 60%, #00b894 100%)",
                        color: "#fff",
                        border: "none",
                        fontWeight: 600,
                        fontSize: "1.08rem",
                        letterSpacing: "0.5px",
                        boxShadow: "0 2px 8px rgba(9,132,227,0.08)",
                        cursor: "pointer",
                        marginTop: "8px",
                        transition: "background 0.2s",
                    }}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}