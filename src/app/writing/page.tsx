import Link from "next/link";
import { posts } from "@/data/posts";
import styles from "../page.module.css";
import pageStyles from "./writing.module.css";

export default function WritingPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.navStar}>✦</span> Deepti Maheshwari
        </Link>
        <div className={styles.navLinks}>
          <Link href="/writing">writing</Link>
          <Link href="/about">about</Link>
          <Link href="/now">now</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <h1 className={pageStyles.heading}>all writings</h1>
        <p className={pageStyles.sub}>everything, in one place.</p>

        <div className={styles.postList}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className={styles.postCard}
            >
              <div className={styles.postLeft}>
                <span className={styles.postEmoji}>{post.emoji}</span>
                <div className={styles.postContent}>
                  <span className={styles.postCategory}>{post.category.toUpperCase()}</span>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
              </div>
              <div
                className={styles.postThumbnail}
                style={{ background: post.thumbnailColor }}
              >
                <span className={styles.thumbEmoji}>{post.emoji}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <span>made with quiet mornings &amp; too much chai · 2026</span>
      </footer>
    </div>
  );
}
