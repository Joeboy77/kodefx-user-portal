import React from 'react';
import Navigation from './Navigation';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <Navigation />
      
      <div className="container">
        <div className="privacy-policy-content">
          <h1 className="privacy-policy-title">Privacy Policy</h1>
          <p className="privacy-policy-date">Last Updated: March 21, 2025</p>
          
          <section className="privacy-section">
            <h2 className="section-title">1. Introduction</h2>
            <p className="section-text">
              Welcome to KodeFX ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our forex trading platform that connects traders with forex experts.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">2. Information We Collect</h2>
            <p className="section-text">
              We collect the following types of information:
            </p>
            <ul className="policy-list">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and payment information.</li>
              <li><strong>Profile Information:</strong> Trading experience, expertise level, and preferences.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our platform, including login times, features used, and trading activities.</li>
              <li><strong>Device Information:</strong> IP address, browser type, device type, and operating system.</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">3. How We Use Your Information</h2>
            <p className="section-text">
              We use your information for the following purposes:
            </p>
            <ul className="policy-list">
              <li>To provide and maintain our services</li>
              <li>To match traders with appropriate forex experts</li>
              <li>To process transactions and manage your account</li>
              <li>To send you important notifications and updates</li>
              <li>To improve our platform and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">4. Information Sharing and Disclosure</h2>
            <p className="section-text">
              We may share your information with:
            </p>
            <ul className="policy-list">
              <li><strong>Forex Experts:</strong> When you request to be matched with an expert, we share relevant information to facilitate the connection.</li>
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our platform and provide services.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">5. Data Security</h2>
            <p className="section-text">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">6. Your Rights</h2>
            <p className="section-text">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="policy-list">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Restrict or object to certain processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">7. Cookies and Tracking Technologies</h2>
            <p className="section-text">
              We use cookies and similar tracking technologies to enhance your experience on our platform. You can adjust your browser settings to refuse cookies, but this may limit some functionality of our services.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">8. International Data Transfers</h2>
            <p className="section-text">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information when transferred internationally.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">9. Children's Privacy</h2>
            <p className="section-text">
              Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">10. Changes to This Privacy Policy</h2>
            <p className="section-text">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our platform or by sending you a notification.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2 className="section-title">11. Contact Us</h2>
            <p className="section-text">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="contact-info">
              <strong>Email:</strong> privacy@kodefx.com<br />
              <strong>Address:</strong> 123 Trading Street, Financial District, New York, NY 10004
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;