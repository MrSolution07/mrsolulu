import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";

// Styles
import "../../styles/global.scss";

// Images
import towerOfHanoi from "../../images/blog-tower-of-hanoi/tower-of-hanoi.gif";

const Post = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />
      <div className="post">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main className="flex flex-col mb-10 max-w-[900px]">
          <article class="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">⚡️</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                003. How I really chose Programming
              </h3>
              <time
                datetime="2025-01-03"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                2025
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="intro-text">
              <section className="intro-text">
                <p>
                  This story honestly deserves a Hollywood budget, dramatic lighting and a
                  voice-over trailer. Unfortunately, I’m just a simple guy no explosions,
                  no slow-motion scenes, just real life.
                </p>

                <br />

                <p>
                  When I was younger, I wanted to become a doctor. Not for the money, not for
                  the title but because I genuinely loved solving problems. I still do.
                  Medicine felt like the ultimate puzzle: something is broken, you find out
                  why, you fix it and someone lives. Simple. Noble. Clean.
                </p>

                <br />

                <p>
                  To me, medicine wasn’t just a career choice it was a calling. If you read
                  the Bible closely, Jesus never described Himself as a businessman. He
                  compared Himself to a doctor.
                </p>

                <br />

                <p>
                  <em>
                    “It is the most noble and honorable profession so noble that even God
                    Himself stepped into the role of a Doctor, because the world was
                    suffering from a disease and He had to wear a doctor’s coat to heal it.”
                  </em>
                </p>

                <br />

                <p>
                  That’s how deeply in love I was with this path. I wasn’t the kind of person
                  who could change circumstances just by talking (like Jesus). I couldn’t fix the world
                  with speeches. But I thought: if I can’t change things with words, maybe I
                  can change them by saving lives. Become a small god, in a way   white coat,
                  stethoscope, hero vibes.
                </p>

                <br />

                <p>
                  But… yes. There had to be a <strong>but</strong>.
                </p>

                <br />

                <p>
                  Everything changed during a period when I was extremely devout. The kind of
                  devout where you don’t just pray in your room   you go full Bible mode. I had
                  decided to completely give my life to Jesus. And like Him, I went up the
                  mountain to pray.
                </p>

                <br />

                <p>
                  That’s where I met a man.
                </p>

                <br />

                <p>
                  His hands were cracked from the cold. His skin clung to his bones. He had
                  been fasting for 21 days, drinking only water and honey. A walking Old
                  Testament reference.
                </p>

                <br />

                <p>
                  His name was Elijah. And yes   he <em>had</em> to be called Elijah. As in
                  Elijah the Tishbite.
                </p>

                <br />

                <p>
                  He spoke only a few words. He described a vision he was seeing but couldn’t
                  understand. I, on the other hand, understood perfectly   and that’s when my
                  heart sank.
                </p>

                <br />

                <p>
                  Because I realized that my dream of becoming a doctor was not part of God’s
                  plan.
                </p>

                <br />

                <p>
                  For days before that moment, I had been having recurring dreams. And in none
                  of them was I a doctor. No hospitals. No white coat. No dramatic “we’re
                  losing him” scenes.
                </p>

                <br />

                <p>
                  Instead, I was always sitting in front of computers. Screens everywhere.
                  Strange symbols. Weird lines scrolling endlessly   exactly what the prophet
                  on the mountain described. Lines he didn’t understand.
                </p>

                <br />

                <p>
                  And honestly? Most people still don’t.
                </p>

                <br />

                <p>
                  So no, I didn’t become a doctor. I didn’t save lives with a scalpel. I just
                  ended up staring at screens, talking to machines, and solving a different
                  kind of illness   one line of code at a time.
                </p>

                <br />

                <p>
                  Hollywood would’ve added explosions.
                  <br />
                  I just got bugs.
                </p>
              </section>
              </section>
            </div>
            <br />
            <br />

            <a href={"/blog/"} className="px-[5%] text-[16px]">
              {"<- "} Back to blog
            </a>
            <br />
            <br />
            <br />
          </article>
        </main>
        <Note />
      </div>
    </>
  );
};

export default Post;

export const Head = () => (
  <title>003. How I really chose Programming | MrSolulu</title>
);
