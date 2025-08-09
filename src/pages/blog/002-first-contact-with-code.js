import * as React from "react";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";

// Styles
import "../../styles/global.scss";

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
          <article className="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">💻</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                002. First contact with code
              </h3>
              <time
                dateTime="2013-03-03"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                2015
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section className="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    My first encounter with programming wasn’t bad, but it was
                    far from what I imagined from movies.
                  </li>
                  <li className="mb-4">
                    I honestly thought coding was just math… turns out, it’s a
                    whole universe of logic, creativity, and problem-solving.
                  </li>
                  <li className="mb-4">
                    Still figuring it all out wish me luck!
                  </li>
                </ul>
                <br />
                <br />
              </section>
              <section className="intro-text">
                <p>
                  Today marks one month since I first sat in front of a computer
                  to write code. To my surprise, it wasn’t as terrifying as I’d
                  imagined but it also wasn’t the glamorous, hacker-in-a-dark-room
                  experience I’d seen in movies.
                </p>
                <br />
                <p>
                  Back then, I truly believed programming was just about solving
                  equations and doing math. I couldn’t have been more wrong.
                  Instead, I discovered it’s this mix of logic, structure,
                  creativity, and a surprising amount of patience.
                </p>
                <br />
                <p>
                  My mother actually pushed me to enroll in a public technical
                  school that combined high school with computer science
                  subjects. I didn’t even own a computer at the time, so I
                  walked into the first class completely raw.
                </p>
                <br />
                <p>
                  Between physics, chemistry, and mathematics, I now also have
                  to wrap my head around <strong>programming logic</strong>,{" "}
                  <strong>databases</strong>, <strong>networks</strong>,{" "}
                  <strong>robotics</strong>, and{" "}
                  <strong>algorithms & data structures</strong>.
                </p>
                <br />
                <p>
                  Thankfully, I have friends who already code and can guide me
                  when things get too confusing.
                </p>
                <br />
                <p>
                  I don’t fully understand everything yet, but I’m curious to
                  see where this path leads.
                </p>
                <br />
                <p>Wish me luck!</p>
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
  <title>002. First Contact with Programming | MrSolulu</title>
);