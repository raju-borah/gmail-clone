import React from "react";
import "./Section.css";
import { useHistory } from "react-router-dom";

function Section({ Icon, title, color, selected }) {
  const history = useHistory();
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
      onClick={() => {
        history.push(`/${title.toLowerCase()}`)
      }}
    >
      <Icon />
      {title}
    </div>
  );
}

export default Section;
