import * as React from "react";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";
import SkipToContent from "../../components/SkipToContent";

// Content
import { articles } from "../../data/blog";

// Styles
import "../../styles/global.scss";
import "../../styles/blog.scss";

const Blog = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const [filter, setFilter] = React.useState("all");

  const lastPublished =
    articles
      ?.flatMap((yearGroup) => yearGroup.posts)
      ?.filter((article) => article.active)
      ?.pop()?.id || articles?.[0]?.posts?.[0]?.id;

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />
      <div className="blog">
        <SkipToContent />
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main id="main-content" className="flex flex-col mb-10 max-w-full blog-main">
          <header className="blog-list-header">
            <h1 className="blog-list-title">Ideas. Opinions. Daydreams.</h1>
            <p className="blog-list-intro">
              Written by me, for my future self. You will find here an honest (and
              sometimes wrong) view of front-end, Back-end, tech career, algorithms,
              creative development study strategies and technical leadership. And sometimes
              just random thoughts about life and technology.
            </p>
          </header>

          <div className="blog-list-controls">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="blog-list-filter"
              aria-label="Filter posts"
            >
              <option value="all">All Posts</option>
              <option value="scheduled">Scheduled posts</option>
              <option value="published">Published only</option>
            </select>
          </div>

          {articles
            ?.slice()
            .reverse()
            .map((yearGroup) => {
              const hasPublishedPosts = yearGroup.posts.some(
                (post) => post.active
              );
              const hasScheduledPosts = yearGroup.posts.some(
                (post) => !post.active
              );
              return (
                <React.Fragment key={yearGroup.year}>
                  {(filter === "all" ||
                    (filter === "published" && hasPublishedPosts) ||
                    (filter === "scheduled" && hasScheduledPosts)) && (
                    <p className="blog-list-year">{yearGroup.year}</p>
                  )}
                  <ul className="blog-list text-[18px] w-full">
                    {yearGroup.posts
                      ?.slice()
                      .reverse()
                      .filter(
                        (post) =>
                          filter === "all" ||
                          (filter === "published" && post.active) ||
                          (filter === "scheduled" && !post.active)
                      )
                      .map((article) => (
                        <li key={article.id} id={article.id} className="blog-list-item">
                          <a
                            href={
                              article.active
                                ? article.link
                                : `#${lastPublished}`
                            }
                            className="blog-list-link"
                          >
                            <span className="blog-list-meta">
                              {article.date && (
                                <time dateTime={article.dateTime}>
                                  {article.date}
                                </time>
                              )}
                              {article.tags?.length > 0 && (
                                <>
                                  {article.date && " — "}
                                  {article.tags.join(", ")}
                                </>
                              )}
                            </span>
                            <span className="blog-list-item-title">
                              {article.id}. {article.title}
                            </span>
                            {article.active && article.description && (
                              <p className="blog-list-item-desc">
                                {article.description}
                              </p>
                            )}
                            <span className="blog-list-item-read">
                              {article.active
                                ? article.readTime
                                : "Will be published soon..."}
                            </span>
                          </a>
                        </li>
                      ))}
                  </ul>
                </React.Fragment>
              );
            })}
        </main>
        <Note />
      </div>
    </>
  );
};

export default Blog;

export const Head = () => <title>Blog | MrSolulu</title>;
