import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
function EmailRow({ id, mailTo, subject, description, time }) {
  const history = useHistory();
  return (
    <div
      onClick={() =>
        history.push("/mail", {
          id: id,
          mailTo: mailTo,
          subject: subject,
          desc: description,
          date: time,
        })
      }
      className="emailRow"
    >
      <div className="emailRow__options">
        <Checkbox />
        <IconButton className="email__option--imp">
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{mailTo}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          {/* <span className="emailRow__description">{description}</span> */}
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
