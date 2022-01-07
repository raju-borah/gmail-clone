import React from "react";
import "./Mail.css";
import { Avatar, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SnoozeIcon from "@mui/icons-material/Snooze";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PrintIcon from "@mui/icons-material/Print";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import { useHistory } from "react-router-dom";
import { FiCornerUpLeft, FiCornerUpRight } from "react-icons/fi";
function Mail() {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <MarkunreadIcon />
          </IconButton>
          <IconButton>
            <SnoozeIcon />
          </IconButton>
          <IconButton>
            <AddTaskIcon />
          </IconButton>

          <IconButton>
            <DriveFileMoveIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          6 of 54
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__subject">
        <h1>Welcome to join CocoSign</h1>
        <div>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__detail">
        <div class="avatar__email">
          <Avatar />
          <span>
            email@gmail.com <br />
            to
          </span>
        </div>
        <div className="mail__date">
          Nov 16, 2021, 11:39 AM
          <IconButton>
            <StarBorderIcon />
          </IconButton>
          <IconButton>
            <ReplyIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        praesentium culpa excepturi est eum adipisci, aperiam necessitatibus
        iure temporibus, ratione ipsum esse asperiores ab repellendus, inventore
        ducimus ullam nulla quae!
      </div>
      <Button variant="outlined" className="btn">
        <FiCornerUpLeft />
        Reply
      </Button>
      <Button variant="outlined" className="btn">
        <FiCornerUpRight />
        Forward
      </Button>
    </div>
  );
}

export default Mail;