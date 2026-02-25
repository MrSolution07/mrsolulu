import * as React from "react";

// Components
import SkipToContent from "../SkipToContent";
import Header from "../Header";
import Note from "../Note";
import Loader from "../Loader";
import Cursor from "../Cursor";

// Styles
import "../../styles/global.scss";
import "../../styles/blog.scss";

const BlogPostLayout = ({ children }) => {
  const [isOpened, setIsOpened] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setIsOpened(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Cursor />
      <div className="post">
        <SkipToContent />
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main id="main-content" className="blog-main flex flex-col mb-10 max-w-[900px]">
          {children}
        </main>
        <Note />
      </div>
    </>
  );
};

export default BlogPostLayout;
