import * as React from "react";
import { Link } from "gatsby";
import BlogPostLayout from "../../components/BlogPostLayout";
import ArticleHeader from "../../components/ArticleHeader";
import { getPostByLink } from "../../data/blog";

const postMeta = getPostByLink("/blog/010");

const Post = () => (
  <BlogPostLayout>
    <article>
      <ArticleHeader
        title={postMeta?.title ?? "The Audacity of Wanting"}
        date={postMeta?.date}
        dateTime={postMeta?.dateTime}
        tags={postMeta?.tags}
      />

      <div className="blog-prose">
        <section className="intro-text">
          <p>
            I hate my audacity to walk away from the things I crave.
          </p>
          <p>
            I hate my audacity to call love a waste of time while secretly yearning for it.
          </p>
          <p>
            I hate my audacity to write for the world when every word was meant for you.
          </p>
          <p>
            — B. Christian
          </p>
        </section>

        <h2>The Walking Away</h2>
        <p>
          There is a cruelty we only inflict on ourselves.
        </p>
        <p>
          Walking away from what we most desire.
        </p>
        <p>
          And calling it strength.
        </p>
        <p>
          We wrap our retreats in the language of wisdom.
        </p>
        <p>
          We say we don't need it.
        </p>
        <p>
          We say we've moved on.
        </p>
        <p>
          We say it out loud, with conviction, to anyone who will listen.
        </p>
        <p>
          And then 2am comes.
        </p>
        <p>
          And the room is quiet.
        </p>
        <p>
          And we know.
        </p>

        <h2>The Lie We Tell With Confidence</h2>
        <p>
          Calling love a waste of time is not a conclusion.
        </p>
        <p>
          It's a defense.
        </p>
        <p>
          We don't arrive there through reason.
        </p>
        <p>
          We arrive through old wounds we haven't finished grieving.
        </p>
        <p>
          And then we reverse-engineer the logic.
        </p>
        <p>
          So the wound sounds like wisdom.
        </p>
        <p>
          So the retreat sounds like a choice.
        </p>
        <p>
          The secret, though, is always louder than the declaration.
        </p>
        <p>
          Always.
        </p>

        <h2>Writing for the World, Aiming at One</h2>
        <p>
          Here is where it gets strange.
        </p>
        <p>
          We sit down to write something universal.
        </p>
        <p>
          Something for everyone.
        </p>
        <p>
          And out comes a letter.
        </p>
        <p>
          With the name removed.
        </p>
        <p>
          The address obscured.
        </p>
        <p>
          The fingerprints wiped clean.
        </p>
        <p>
          Sent into a crowd.
        </p>
        <p>
          Hoping one particular face receives it.
        </p>
        <p>
          And understands.
        </p>
        <p>
          Without being told.
        </p>

        <h2>The Reframe</h2>
        <p>
          Here is what I want to say before we end.
        </p>
        <p>
          The hate is the love.
        </p>
        <p>
          You cannot hate your own audacity unless you are fully aware of what you are doing.
        </p>
        <p>
          That awareness is intimacy with yourself.
        </p>
        <p>
          Which is the first and hardest kind.
        </p>
        <p>
          The person who walks away and then writes about walking away?
        </p>
        <p>
          That is not contradiction.
        </p>
        <p>
          That is a self trying to close the gap between what it knows and what it feels.
        </p>
        <p>
          Keeping honest record.
        </p>
        <p>
          Every single time.
        </p>

        <h2>The Strong Point</h2>
        <p>
          The audacity is not in the wanting.
        </p>
        <p>
          The audacity is in admitting it.
        </p>
        <p>
          On the page.
        </p>
        <p>
          In the dark.
        </p>
        <p>
          For the world.
        </p>
        <p>
          For the one.
        </p>
        <p>
          You are not a contradiction.
        </p>
        <p>
          You are a work in progress.
        </p>
        <p>
          And the fact that you are still writing?
        </p>
        <p>
          That is the most audacious thing of all.
        </p>
        <p>
          (Also, if you're still sending voice notes at midnight to someone you said you were "completely over" — no judgment. We've all been there. Some of us are still there. Typing this from there right now.)
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
      : "The Audacity of Wanting"} | MrSolulu
  </title>
);