import Link from "next/link";
import styles from "../page.module.css";
import aboutStyles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.navStar}>✦</span> Deepti Maheshwari.
        </Link>
        <div className={styles.navLinks}>
          <Link href="/writing">writing</Link>
          <Link href="/about">about</Link>
          <Link href="/now">now</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={aboutStyles.heading}>hey, i&apos;m Deepti.</h1>
        <div className={aboutStyles.body}>
          <p>
            i&apos;m a CSE student. I like tinkering with systems, learning about ML, 
            and problem-solving. This place is my "go-to" place for documenting my life. 
            I go by the quote: <em>allow yourself to shine without the desire to be seen</em>
          </p>
          <p>
            i&apos;m interested in systems, machine learning, and why some code
            feels <em>right</em>. 
            too broke to travel. yet too optimistic to give up. 

          </p>
          <p>
            you can find me on {" "}
            <a href="www.linkedin.com/in/deepti-maheshwari-981aa7360" target="_blank" rel="noreferrer">
              Linkedin
            </a>{" "}
                or reach me at{" "}
            <a href="mailto:deeptimaheshwari1013@gmail.com">deeptimaheshwari1013@gmail.com</a>.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>made with quiet mornings &amp; too much chai · 2026</span>
      </footer>
    </div>
  );
}
