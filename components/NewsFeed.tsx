// components/NewsFeed.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link'; // 👈 ajout

export default function NewsFeed() {
  const mdxPath = path.join(process.cwd(), 'content', 'news.mdx');
  const source = fs.readFileSync(mdxPath, 'utf8');
  return (
    <article className="card">
      <MDXRemote source={source} components={{ Link }} /> {/* 👈 fournir Link */}
    </article>
  );
}
