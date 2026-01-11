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
              <p className="mb-3 text-[80px]">🚗</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                The Boring Side of Modelling Databases
              </h3>
              <time datetime="2015-12-02" className="text-[18px] text-[#bbb]">
                December 02, 2015
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
                  <li className="mb-4">
                   
                  </li>
                </ul>
                <br />
              </section>
              <section class="intro-text">
                <p className="mb-4">
                 
                </p>
                <p>
                 
                </p>
                <br />
                <p>
                  The first thing I tried to do was identify the basic
                  attributes of a car. I'm not sure if I got all of them, but
                  here's what I thought we might need to store:
                </p>
                <br />
                
                <br />
                <p>
                  After that, I started wondering about related entities. This
                  is where I got really confused: A car seems like one thing,
                  but it's actually made up of lots of different parts. Does
                  this parts deserve a separate table? Why? What will happen if
                  we keep it in the same table? I don't get it.
                </p>
                <br />
                <p>She advised us to add more stuff:</p>
                
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
                <p></p>
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
  <title>006. The Boring Side of Modelling Databases | MrSolulu</title>
);
