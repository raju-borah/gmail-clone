import React from "react";
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
import Section from "../UI/Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
function EmailList() {
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
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="blue" />
        <Section Icon={LocalOfferIcon} title="Prommotions" color="black" />
      </div>
      <div className="emailList__list">
        <EmailRow
          id="1"
          title="Raju"
          subject="hey"
          description="this is a test"
          time="Jan 4"
        />
        <EmailRow
          id="2"
          title="Raju"
          subject="hey"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia commodi iste molestiae maiores doloremque dolores explicabo numquam perspiciatis possimus repellat."
          time="Jan 4"
        />{" "}
        <EmailRow
          id="1"
          title="Raju"
          subject="hey"
          description="this is a test"
          time="Jan 4"
        />
        <EmailRow
          id="2"
          title="Raju"
          subject="hey"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia commodi iste molestiae maiores doloremque dolores explicabo numquam perspiciatis possimus repellat."
          time="Jan 4"
        />{" "}
        <EmailRow
          id="1"
          title="Raju"
          subject="hey"
          description="this is a test"
          time="Jan 4"
        />
        <EmailRow
          id="2"
          title="Raju"
          subject="hey"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia commodi iste molestiae maiores doloremque dolores explicabo numquam perspiciatis possimus repellat."
          time="Jan 4"
        />{" "}
        <EmailRow
          id="1"
          title="Raju"
          subject="hey"
          description="this is a test"
          time="Jan 4"
        />
        <EmailRow
          id="2"
          title="Raju"
          subject="hey"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia commodi iste molestiae maiores doloremque dolores explicabo numquam perspiciatis possimus repellat."
          time="Jan 4"
        />{" "}
        <EmailRow
          id="1"
          title="Raju"
          subject="hey"
          description="this is a test"
          time="Jan 4"
        />
      </div>
    </div>
  );
}

export default EmailList;
