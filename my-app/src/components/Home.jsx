import React from 'react'
import '../style/Home.css'
export const Home = () => {
  return (
    <>
     <nav class="navbar">
        <div class="container">
            <div class="logo">
                <h2>MyWebsite</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    {/* <!-- Hero Section --> */}
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Welcome to MyWebsite</h1>
                <p>We create amazing digital experiences that help businesses grow and succeed in the modern world.</p>
                <div class="hero-buttons">
                    <a href="#" class="btn btn-primary">Get Started</a>
                    <a href="#" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section class="features">
        <div class="container">
            <h2 class="section-title">Why Choose Us</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚀</div>
                    <h3>Fast Performance</h3>
                    <p>Lightning fast websites that load in milliseconds for better user experience.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Responsive Design</h3>
                    <p>Perfect layout on all devices - desktop, tablet, and mobile phones.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure</h3>
                    <p>Top-notch security to protect your data and your customers' information.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Modern Design</h3>
                    <p>Beautiful, modern designs that capture your brand identity perfectly.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- About Section --> */}
    <section class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title">About Us</h2>
                    <p>We are a passionate team of developers and designers with over 5 years of experience. We've helped 100+ businesses establish their online presence and grow their revenue.</p>
                    <p>Our mission is to deliver high-quality, innovative solutions that make a real difference for our clients. We believe in building long-term relationships based on trust and exceptional results.</p>
                    <div class="stats">
                        <div class="stat-item">
                            <h3>100+</h3>
                            <p>Projects Done</p>
                        </div>
                        <div class="stat-item">
                            <h3>50+</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div class="stat-item">
                            <h3>5+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <div class="image-placeholder">
                        <span>📸 Image Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>MyWebsite</h3>
                    <p>Creating amazing digital experiences that help businesses grow and succeed.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p>📧 info@mywebsite.com</p>
                    <p>📞 +1 234 567 890</p>
                    <p>📍 New York, NY 10001</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}
