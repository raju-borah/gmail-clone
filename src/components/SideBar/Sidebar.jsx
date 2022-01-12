import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";
function Sidebar() {
  const sideBarOptions = [
    {
      icon: InboxIcon,
      title: "Inbox",
      number: "",
      isActive: true,
    },
    {
      icon: StarIcon,
      title: "Starred",
      number: "",
      isActive: false,
    },
    {
      icon: AccessTimeIcon,
      title: "Snoozed",
      number: "",
      isActive: false,
    },
    {
      icon: LabelImportantIcon,
      title: "Important",
      number: "",
      isActive: false,
    },
    {
      icon: NearMeIcon,
      title: "Sent",
      number: "",
      isActive: false,
    },
    {
      icon: NoteIcon,
      title: "Draft",
      number: "",
      isActive: false,
    },
    {
      icon: ExpandMoreIcon,
      title: "More",
      number: "",
      isActive: false,
    },
  ];
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<EditOutlinedIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      {sideBarOptions.map((element, index) => {
        return (
          <SidebarOption
            key={index}
            Icon={element.icon}
            title={element.title}
            number={element.number}
            selected={element.isActive}
          />
        );
      })}
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
