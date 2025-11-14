import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  // Each section has its own open state
  const [openSections, setOpenSections] = useState({
    logo: false,
    links: false,
    social: false,
    payments: false,
  });

  const toggleSection = (name) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <footer className={styles.footer}>
      {/* --- Top Section: Newsletter + Contact + Currency --- */}
      <div className={styles.top}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <div>
            <h4>CONTACT US</h4>
            <div className={styles.contactDetails}>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>

          <div className={styles.currency}>
            <h4>CURRENCY</h4>
            <p>🇺🇸 USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* --- Middle Section: Accordion --- */}
      <div className={styles.middle}>
        {/* mettā muse */}
        <div
          className={`${styles.logoSection} ${
            openSections.logo ? styles.active : ""
          }`}
        >
          <h2 className={styles.logo} onClick={() => toggleSection("logo")}>
            mettā muse
          </h2>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div
          className={`${styles.links} ${
            openSections.links ? styles.active : ""
          }`}
        >
          <h4 onClick={() => toggleSection("links")}>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* FOLLOW + PAYMENTS WRAPPER */}
        <div className={styles.followAndPayments}>
          {/* Follow Us */}
          <div
            className={`${styles.social} ${
              openSections.social ? styles.active : ""
            }`}
          >
            <h4 onClick={() => toggleSection("social")}>FOLLOW US</h4>
            <div className={styles.icons}>
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <hr className={styles.divider} />

          {/* Payments */}
          <div
            className={`${styles.paymentsSection} ${
              openSections.payments ? styles.active : ""
            }`}
          >
            <h4>mettā muse ACCEPTS</h4>
            <div className={styles.payments}>
              <Image src="/gpay.png" width={40} height={40} alt="gpay" />
              <Image
                src="/Mastercard-Logo.png"
                width={40}
                height={40}
                alt="Mastercard"
              />
              <Image src="/pp.webp" width={40} height={40} alt="PayPal" />
              <Image src="/amex.webp" width={40} height={40} alt="Amex" />
              <Image
                src="/applepay.webp"
                width={40}
                height={40}
                alt="Apple Pay"
              />
              <Image src="/Vector.png" width={40} height={40} alt="Vector" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom --- */}
      <div className={styles.bottom}>
        <p>Copyright © 2023 mettāmuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
