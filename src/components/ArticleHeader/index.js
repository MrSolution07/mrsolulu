import * as React from "react";
import TagList from "../TagList";

// Styles
import "./index.scss";

const ArticleHeader = ({
  title,
  date,
  dateTime,
  tags = [],
  seriesLabel,
}) => {
  return (
    <header className="article-header">
      {seriesLabel && (
        <p className="article-header__series">{seriesLabel}</p>
      )}
      <h1 className="article-header__title">{title}</h1>
      <p className="article-header__meta">
        {date && (
          <time dateTime={dateTime || undefined}>{date}</time>
        )}
        {date && tags?.length > 0 && " — "}
        {tags?.length > 0 && <TagList tags={tags} className="article-header__tags" />}
      </p>
    </header>
  );
};

export default ArticleHeader;
