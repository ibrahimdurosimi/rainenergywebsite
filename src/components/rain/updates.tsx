import { news } from "@/data/content";
import { Layout, PageHero, SectionHeading, NewsCards, NotFound, ArrowUpRight } from "./shared";
export function NewsPage() {
  return (
    <Layout>
      <PageHero
        title="Progress, people and perspective."
        description="Updates from across our capabilities, our projects and Nigeria’s evolving energy landscape."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="News & insights"
            title="The latest from Rain Energy."
            description="All articles are illustrative sample content, prepared for this website demonstration."
          />
          <NewsCards />
        </div>
      </section>
    </Layout>
  );
}
export function ArticlePage({ slug }: { slug?: string }) {
  const article = news.find((n) => n.slug === slug);
  if (!article) return <NotFound kind="article" href="/news" label="Read all news" />;
  return (
    <Layout>
      <PageHero
        title={article.title}
        category="News"
        description={article.summary}
        image={article.image}
      />
      <section className="section">
        <div className="container">
          <article className="article">
            <div className="article-meta">
              <time>{article.date}</time>
              <span className="sample-tag">Sample article</span>
              <span>Rain Energy</span>
            </div>
            <img
              src={article.image}
              className="article-cover"
              alt={article.title}
              width={1536}
              height={1024}
              loading="lazy"
            />
            {article.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a href="/news" className="text-link scope-heading">
              Back to news
              <ArrowUpRight />
            </a>
          </article>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Continue reading" title="More news & insights." />
          <NewsCards items={news.filter((n) => n.slug !== article.slug).slice(0, 3)} />
        </div>
      </section>
    </Layout>
  );
}
