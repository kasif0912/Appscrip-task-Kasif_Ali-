import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* ======= TOP ROW (Left + Center + Right) ======= */}
      <div className={styles.topRow}>
        {/* LEFT SECTION */}
        <div className={styles.left}>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </div>

        {/* CENTER SECTION */}
        <div className={styles.center}>
          <h2 className={styles.logoText}>LOGO</h2>
        </div>

        {/* RIGHT SECTION */}
        <div className={styles.right}>
          <span>🔍</span>
          <span>❤️</span>
          <span>🛒</span>
          <span>👤</span>
          <span>ENG ⌄</span>
        </div>
      </div>

      {/* ======= NAV MENU ======= */}
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
}
