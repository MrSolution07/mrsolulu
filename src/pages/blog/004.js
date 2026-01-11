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
          <article class="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">➡️</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                What is coding ?
              </h3>
              <time
                datetime="2015-03-03"
                className="text-[18px] text-[var(--tw-text-gray-secondary)]"
              >
                2025
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    
                  </li>
                  <li className="mb-4">
                    
                  </li>
                  <li className="mb-4">
                  
                  </li>
                </ul>
                <br />
                <br />
              </section>
              <section class="intro-text">
                <p>
                  COMING SOON
                </p>
                <br />
                <p>
                 
                </p>
                <br />
                <p>
                  
                </p>
                <br />
                <p>
                  
                </p>
                <br />
                <p>
                  
                </p>
                <br />
                <p>
                 
                </p>
                <br />
                <p>
                  
                </p>
                <br />
                <p>
                  See ya.
                </p>
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

export const Head = () => <title>004. What is coding ? | MrSolulu</title>;
