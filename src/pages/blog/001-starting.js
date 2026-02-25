import * as React from "react";
import { Link } from "gatsby";

// Components
import BlogPostLayout from "../../components/BlogPostLayout";
import ArticleHeader from "../../components/ArticleHeader";

// Data
import { getPostByLink } from "../../data/blog";

const postMeta = getPostByLink("/blog/001-starting");

const Post = () => (
  <BlogPostLayout>
    <article>
      <ArticleHeader
        title={postMeta?.title ?? "Starting..."}
        date={postMeta?.date}
        dateTime={postMeta?.dateTime}
        tags={postMeta?.tags}
      />
      <div className="blog-prose">
        <section className="intro-text">
          <p>
            One Line A Day to Keep the Doctor Awake. And since then my life has never been the same ever again.
          </p>
          <p>
            My story started when I was 12. A friend told me about automating tasks and solving maths using code  and as a math enthusiast, that got me hooked. I wrote my first line of code shortly after.
            Funny fact: I initially wanted to become a doctor... but coding chose me. I never really chose it. Somehow, I believe God showed me the path.
          </p>
          <p>
            I have just started learning programming and will document
            everything here. My primary intention is to log this journey
            for my future self. Additionally, this text may help someone
            in the future who is going through the same steps as I am.
          </p>
          <p>
            All texts here will be <strong>pragmatic</strong>,{" "}
            <strong>simple</strong>, and possibly <strong>written in the
            past first person</strong>, as if I were writing for
            my future self.
          </p>
          <p>
            All posts will include <strong>TLDR lists</strong> as a
            summary at the beginning, <strong>graph and charts</strong>{" "}
            when relevant, <strong>images</strong>, <strong>draws</strong>
            , along with personal opinions (sometimes completely
            incorrect).
          </p>
          <p>
            I am not yet sure what will happen or which path I will
            choose. However, making a prediction, this blog probably will
            focus on: <strong>software development</strong> in general,{" "}
            <strong>algorithms</strong>, specific
            technologies like <strong>languages, libs or frameworks</strong>, <strong>career-related topics</strong>,{" "}
            <strong>game development</strong> and <strong>web
            development</strong>,
          </p>
          <p>Hope you comeback.</p>
        </section>
      </div>
      <Link to="/blog/" className="blog-back-link">
        {"<- "} Back to blog
      </Link>
    </article>
  </BlogPostLayout>
);

export default Post;

export const Head = () => (
  <title>{postMeta ? `${postMeta.id}. ${postMeta.title}` : "Starting..."} | MrSolulu</title>
);
