import Link from "next/link";
import styles from "../page.module.css";
import nowStyles from "./now.module.css";

export default function NowPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.navStar}>✦</span> Deepti.
        </Link>
        <div className={styles.navLinks}>
          <Link href="/writing">writing</Link>
          <Link href="/about">about</Link>
          <Link href="/now">now</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={nowStyles.heading}>what i&apos;m doing now</h1>
        <p className={nowStyles.updated}>updated April 2026 · from Una(himachal)</p>

        <div className={nowStyles.body}>
          <div className={nowStyles.item}>
            <span className={nowStyles.bullet}>📚</span>
            <div>
              <strong>studying</strong> — first year CS. deep in data structures
              and trying to actually understand proofs this time.
            </div>
          </div>
          <div className={nowStyles.item}>
            <span className={nowStyles.bullet}>🔨</span>
            <div>
              <strong>building</strong> — a digit-recognizer(scratch and tensorflow) slowly.
            </div>
          </div>
          <div className={nowStyles.item}>
            <span className={nowStyles.bullet}>📖</span>
            <div>
              <strong>reading</strong> — this fucking awesome book, "Grokking algorthims" and gotta read dostoevsky
            </div>
          </div>
          <div className={nowStyles.item}>
            <span className={nowStyles.bullet}>☕</span>
            <div>
              <strong>Music</strong> — Weekend, Arpit bala, PinkPantheress, KISS, Raye, and cigarettes after sex.
              God forbid, i did not mention Tame impala.
            </div>
          </div>
        </div>

        <p className={nowStyles.note}>
          this is a{" "}
          <a href="https://nownownow.com/about" target="_blank" rel="noreferrer">
            /now page
          </a>
          . it&apos;s a snapshot of what i&apos;m focused on at this moment in time.
        </p>
      </main>

      <footer className={styles.footer}>
        <span>made with quiet mornings &amp; too much chai · 2026</span>
      </footer>
    </div>
  );
}
