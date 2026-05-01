import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import styles from "./post.module.css";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const p = post!;  // ← fixes the TypeScript error

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
        <Link href="/" className={styles.back}>← back</Link>

        <div className={styles.postMeta}>
          <span className={styles.category}>{p.category}</span>
          <span>{p.date}</span>
          <span>·</span>
          <span>{p.readTime}</span>
        </div>

        <h1 className={styles.title}>{p.title}</h1>

        <div className={styles.body}>
  <ReactMarkdown>{post.content}</ReactMarkdown>
</div>
      </main>

      <footer className={styles.footer}>
        <span>made with quiet mornings &amp; too much chai · 2026</span>
      </footer>
    </div>
  );
}