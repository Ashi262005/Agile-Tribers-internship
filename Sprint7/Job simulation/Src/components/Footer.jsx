import React from 'react';

export default function Footer() {
    return (
        <footer className="footer" style={{ background: "#222", color: "#fff", padding: "2rem 0", textAlign: "center" }}>
            <div style={{ marginBottom: "1rem" }}>
                <strong>ShopEasy</strong> &mdash; Your one-stop shop for everything!
            </div>
            <div style={{ marginBottom: "1rem" }}>
                <a href="/about" style={{ color: "#fff", margin: "0 1rem" }}>About Us</a>
                <a href="/contact" style={{ color: "#fff", margin: "0 1rem" }}>Contact</a>
            </div>
            <div>
                <span>Follow us:</span>
                <a href="https://twitter.com" style={{ color: "#fff", margin: "0 0.5rem" }} aria-label="Twitter">
                    <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://facebook.com" style={{ color: "#fff", margin: "0 0.5rem" }} aria-label="Facebook">
                    <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="https://instagram.com" style={{ color: "#fff", margin: "0 0.5rem" }} aria-label="Instagram">
                    <i className="fab fa-instagram"></i> Instagram
                </a>
            </div>
            <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "#bbb" }}>
                © {new Date().getFullYear()} ShopEasy. All rights reserved.
            </p>
        </footer>
    );
}