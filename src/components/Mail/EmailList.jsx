import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RedoIcon from "@mui/icons-material/Redo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "../Section/Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { query, orderBy } from "firebase/firestore";

function EmailList() {
  const [lists, setlists] = useState([]);
  const [loading, setloading] = useState(true);
  const getData = async () => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data()) {
        setlists((prev) => {
          return [doc.data(), ...prev];
        });
      }
    });
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__section">
        <Section Icon={InboxIcon} title="Primary" color="red" selected="true" />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Prommotions" color="black" />
      </div>
      <div className="emailList__list">
        {loading === true
          ? "loading..."
          : lists.map((currentElement, index) => {
              return (
                <EmailRow
                  id={index++}
                  key={index++}
                  mailTo={currentElement.to}
                  subject={currentElement.subject}
                  description={currentElement.message}
                  time={new Date(
                    currentElement.timestamp.seconds * 1000
                  ).toLocaleDateString("en-US", {
                    // weekday: "short",
                    year: "2-digit",
                    month: "short",
                    // hour: "2-digit",
                    // minute: "2-digit",
                  })}
                />
              );
            })}
      </div>
    </div>
  );
}

export default EmailList;
