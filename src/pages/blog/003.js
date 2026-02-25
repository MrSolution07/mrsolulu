import * as React from "react";
import { Link } from "gatsby";

// Components
import BlogPostLayout from "../../components/BlogPostLayout";
import ArticleHeader from "../../components/ArticleHeader";

// Data
import { getPostByLink } from "../../data/blog";

const postMeta = getPostByLink("/blog/003");

const Post = () => (
  <BlogPostLayout>
    <article>
      <ArticleHeader
        title={postMeta?.title ?? "How I really chose Programming"}
        date={postMeta?.date}
        dateTime={postMeta?.dateTime}
        tags={postMeta?.tags}
      />
      <div className="blog-prose">
        <section className="intro-text">
          <p>
            This story honestly deserves a Hollywood budget, dramatic lighting and a
            voice-over trailer. Unfortunately, I'm just a simple guy no explosions,
            no slow-motion scenes, just real life.
          </p>
          <p>
            When I was younger, I wanted to become a doctor. Not for the money, not for
            the title but because I genuinely loved solving problems. I still do.
            Medicine felt like the ultimate puzzle: something is broken, you find out
            why, you fix it and someone lives. Simple. Noble. Clean.
          </p>
          <p>
            To me, medicine wasn't just a career choice it was a calling. If you read
            the Bible closely, Jesus never described Himself as a businessman. He
            compared Himself to a doctor.
          </p>
          <p>
            <em>
              "It is the most noble and honorable profession so noble that even God
              Himself stepped into the role of a Doctor, because the world was
              suffering from a disease and He had to wear a doctor's coat to heal it."
            </em>
          </p>
          <p>
            That's how deeply in love I was with this path. I wasn't the kind of person
            who could change circumstances just by talking (like Jesus). I couldn't fix the world
            with speeches. But I thought: if I can't change things with words, maybe I
            can change them by saving lives. Become a small god, in a way   white coat,
            stethoscope, hero vibes.
          </p>
          <p>
            But… yes. There had to be a <strong>but</strong>.
          </p>
          <p>
            Everything changed during a period when I was extremely devout. The kind of
            devout where you don't just pray in your room   you go full Bible mode. I had
            decided to completely give my life to Jesus. And like Him, I went up the
            mountain to pray.
          </p>
          <p>
            That's where I met a man.
          </p>
          <p>
            His hands were cracked from the cold. His skin clung to his bones. He had
            been fasting for 21 days, drinking only water and honey. A walking Old
            Testament reference.
          </p>
          <p>
            His name was Elijah. And yes   he <em>had</em> to be called Elijah. As in
            Elijah the Tishbite.
          </p>
          <p>
            He spoke only a few words. He described a vision he was seeing but couldn't
            understand. I, on the other hand, understood perfectly   and that's when my
            heart sank.
          </p>
          <p>
            Because I realized that my dream of becoming a doctor was not part of God's
            plan.
          </p>
          <p>
            For days before that moment, I had been having recurring dreams. And in none
            of them was I a doctor. No hospitals. No white coat. No dramatic "we're
            losing him" scenes.
          </p>
          <p>
            Instead, I was always sitting in front of computers. Screens everywhere.
            Strange symbols. Weird lines scrolling endlessly   exactly what the prophet
            on the mountain described. Lines he didn't understand.
          </p>
          <p>
            And honestly? Most people still don't.
          </p>
          <p>
            So no, I didn't become a doctor. I didn't save lives with a scalpel. I just
            ended up staring at screens, talking to machines, and solving a different
            kind of illness   one line of code at a time.
          </p>
          <p>
            Hollywood would've added explosions.
            <br />
            I just got bugs.
          </p>
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
  <title>{postMeta ? `${postMeta.id}. ${postMeta.title}` : "How I really chose Programming"} | MrSolulu</title>
);
