import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import styles from "./post.module.css";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.navStar}>✦</span> your name.
        </Link>
        <div className={styles.navLinks}>
          <Link href="/writing">writing</Link>
          <Link href="/about">about</Link>
          <Link href="/now">now</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <Link href="/" className={styles.back}>← back</Link>

        <div className={styles.postMeta}>
          <span className={styles.category}>{post.category}</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.body}>
          <p>{post.excerpt}</p>
          <p>
            This is where your full post content goes. You can write as much as you
            want here. Replace this with your actual writing — markdown, paragraphs,
            code snippets, whatever you like.
          </p>
          <p>
            To add more posts, open <code>src/data/posts.ts</code> and add a new
            entry to the array. Then create the corresponding post page or let this
            template handle it.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>made with quiet mornings &amp; too much chai · 2026</span>
      </footer>
    </div>
  );
}
