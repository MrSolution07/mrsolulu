import * as React from "react";
import { Link } from "gatsby";
import BlogPostLayout from "../../components/BlogPostLayout";
import ArticleHeader from "../../components/ArticleHeader";
import { getPostByLink } from "../../data/blog";

const postMeta = getPostByLink("/blog/009");

const Post = () => (
  <BlogPostLayout>
    <article>
      <ArticleHeader
        title={postMeta?.title ?? "The Paradox of Hope"}
        date={postMeta?.date}
        dateTime={postMeta?.dateTime}
        tags={postMeta?.tags}
      />

      <div className="blog-prose">
        <section className="intro-text">
          <p>
            I used to think hope was always a good thing.
          </p>
          <p>
            More hope = more success.
          </p>
          <p>
            I was wrong.
          </p>
        </section>

        <h2>The Soldier Who Understood Hope</h2>
        <p>
          I once came across the story of James Stockdale, a U.S. Navy officer captured during the Vietnam War.
        </p>

        <figure>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/James_Stockdale_Formal_Portrait.jpg"
            alt="Formal portrait of Rear Admiral James B. Stockdale in full dress white uniform, circa 1979"
            decoding="async"
          />
          <figcaption>
            Rear Adm. James B. Stockdale, circa 1979. U.S. Navy photo &mdash;{" "}
            <a href="https://commons.wikimedia.org/wiki/File:James_Stockdale_Formal_Portrait.jpg">public domain</a>.
          </figcaption>
        </figure>

        <p>
          He spent over seven years as a prisoner.
        </p>
        <p>
          And he noticed something disturbing.
        </p>
        <p>
          The ones who didn’t survive weren’t always the weakest.
        </p>
        <p>
          They were often the most optimistic.
        </p>
        <p>
          They kept saying:
        </p>
        <p>
          "We’ll be out by Christmas."
        </p>
        <p>
          Then Christmas passed.
        </p>
        <p>
          "By Easter."
        </p>
        <p>
          Easter passed too.
        </p>
        <p>
          And little by little, their hope collapsed.
        </p>
        <p>
          Stockdale survived because he did something different:
        </p>
        <p>
          He kept faith, but never lied to himself about reality.
        </p>

        <h2>Then I Lived It</h2>
        <p>
          That paradox didn’t stay theoretical for me.
        </p>
        <p>
          I lived it during my final year software project.
        </p>
        <p>
          At the beginning, our stakeholder didn’t believe in us at all.
        </p>
        <p>
          So we pushed hard to prove ourselves.
        </p>
        <p>
          Demos. Improvements. Features.
        </p>
        <p>
          We wanted her to see that we were actually good.
        </p>
        <p>
          And it worked.
        </p>
        <p>
          Maybe too well.
        </p>

        <h2>When Hope Becomes Dangerous</h2>
        <p>
          She went from skeptical to overly excited.
        </p>
        <p>
          New ideas. New features. Higher expectations.
        </p>
        <p>
          The project kept growing.
        </p>
        <p>
          At the same time, we had a presentation day.
        </p>
        <p>
          A competition.
        </p>
        <p>
          A winner.
        </p>
        <p>
          And I wanted to win.
        </p>
        <p>
          Let me not romantice it, I hate losing.
        </p>
        <p>
          There’s nothing romantic about losing.
        </p>

        <figure>
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
            alt="Team of developers gathered around a laptop working late under deadline pressure"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@jipy32">Jean-Philippe Delberghe</a>{" "}
            on <a href="https://unsplash.com/photos/photo-1559027615-cd4628902d4a">Unsplash</a>.
          </figcaption>
        </figure>

        <h2>The Reality Behind the Win</h2>
        <p>
          So we pushed.
        </p>
        <p>
          Hard.
        </p>
        <p>
          We built, fixed, adjusted, improvised.
        </p>
        <p>
          A lot.
        </p>
        <p>
          The best word for it?
        </p>
        <p>
          Scrappy engineering.
        </p>
        <p>
          A mix of clever fixes, last-minute solutions, and controlled chaos.
        </p>
        <p>
          And yes.
        </p>
        <p>
          We won.
        </p>

        <h2>The Paradox of Hope</h2>
        <p>
          But here’s the truth:
        </p>
        <p>
          We had built a level of hope that reality could barely sustain.
        </p>
        <p>
          And that’s when it clicked.
        </p>
        <p>
          The paradox of hope.
        </p>
        <p>
          Hope is necessary.
        </p>
        <p>
          But when it becomes disconnected from reality, it turns into a liability.
        </p>
        <p>
          In software, unrealistic expectations lead to:
        </p>
        <ul>
          <li>Missed deadlines</li>
          <li>Fragile systems</li>
          <li>Loss of trust</li>
        </ul>
        <p>
          The strongest projects aren’t built on hype.
        </p>
        <p>
          They’re built on disciplined hope.
        </p>
        <p>
          The kind that believes in success.
        </p>
        <p>
          But respects reality.
        </p>

        <h2>The Strong Point</h2>
        <p>
          Hope is powerful.
        </p>
        <p>
          But unchecked hope is dangerous.
        </p>
        <p>
          The goal is not to be optimistic.
        </p>
        <p>
          The goal is to be lucid.
        </p>
        <p>
          Believe it will work.
        </p>
        <p>
          But build like it might break.
        </p>
        <p>
          That’s how you survive.
        </p>
        <p>
          That’s how you win.
        </p>

      </div>

      <Link to="/blog/" className="blog-back-link">
        {"<- "} Back to blog
      </Link>
    </article>
  </BlogPostLayout>
);

export default Post;

export const Head = () => (
  <title>
    {postMeta
      ? `${postMeta.id}. ${postMeta.title}`
      : "The Paradox of Hope"} | MrSolulu
  </title>
);