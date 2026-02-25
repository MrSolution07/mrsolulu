import * as React from "react";
import { Link } from "gatsby";

const TagList = ({ tags = [], className = "" }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <span className={`tag-list ${className}`.trim()}>
      {tags.map((tag, i) => (
        <React.Fragment key={tag}>
          {i > 0 && ", "}
          <Link to={`/blog?tag=${encodeURIComponent(tag)}`} className="tag-list__link">
            {tag}
          </Link>
        </React.Fragment>
      ))}
    </span>
  );
};

export default TagList;
