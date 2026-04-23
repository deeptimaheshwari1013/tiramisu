import Link from "next/link";
import { latestPost, recentPosts } from "@/data/posts";
import styles from "./page.module.css";

const categoryIcons: Record<string, string> = {
  "cs": "💻",
  "college life": "👾",
  "research": "📚",
  "daily log": "☕",
};

export default function Home() {
  return (
    <div className={styles.page}>
      {/* NAV */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.navStar}>✦</span>Deepti Maheshwari.
        </Link>
        <div className={styles.navLinks}>
          <Link href="/writing">writing</Link>
          <Link href="/about">about</Link>
          <Link href="/now">now</Link>
        </div>
      </nav>

      <main className={styles.main}>
        {/* LATEST ENTRY */}
        <section className={styles.latestSection}>
          <div className={styles.latestLabel}>
            <span className={styles.labelStar}>✦</span> LATEST ENTRY
          </div>
          <Link href={`/posts/${latestPost.slug}`} className={styles.latestLink}>
            <h1 className={styles.latestTitle}>{latestPost.title}</h1>
          </Link>
          <div className={styles.latestMeta}>
            <span>{latestPost.date}</span>
            <span className={styles.dot}>·</span>
            <span>{latestPost.readTime}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.tag}>{latestPost.category}</span>
          </div>
          <p className={styles.latestExcerpt}>{latestPost.excerpt}</p>
          <Link href={`/posts/${latestPost.slug}`} className={styles.readMore}>
            read entry →
          </Link>
        </section>

        <hr className={styles.divider} />

        {/* RECENT ENTRIES */}
        <section className={styles.recentSection}>
          <div className={styles.sectionLabel}>RECENT ENTRIES</div>
          <div className={styles.postList}>
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className={styles.postCard}
              >
                <div className={styles.postLeft}>
                  <span className={styles.postEmoji}>
                    {categoryIcons[post.category] ?? "📝"}
                  </span>
                  <div className={styles.postContent}>
                    <span className={styles.postCategory}>
                      {post.category.toUpperCase()}
                    </span>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <span className={styles.postDate}>{post.date}</span>
                  </div>
                </div>
                <div
                  className={styles.postThumbnail}
                  style={{ background: post.thumbnailColor }}
                >
                  <span className={styles.thumbEmoji}>
                    {categoryIcons[post.category] ?? "📝"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <hr className={styles.divider} />

        {/* ABOUT ME */}
        <section className={styles.aboutSection}>
          <div className={styles.sectionLabel}>ABOUT ME</div>
          <div className={styles.aboutCard}>
            <div className={styles.aboutAvatar}>😋</div>
            <p className={styles.aboutText}>
              hey, i&apos;m <strong>Deepti</strong>. Just here to leave a digital footprint on the internet. 
              You'll find me reading, studying, or with my friends at 2am doing something dumb. 
              I like math, tech, and food. 
            </p>
            
            <p className={styles.aboutStatus}>
              currently studying · probably caffeinated · based in india
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        
        <span>made with quiet mornings &amp; too much chai · 2026</span>
        <div className={styles.footerIcons}>
          <span>🌿</span>
          <span>★</span>
          <span>☽</span>
        </div>
      </footer>
    </div>
  );
}
