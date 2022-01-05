import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
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
import { useHistory } from "react-router-dom";
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
        <h4>Welcome to join CocoSign</h4>
        <div>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        
      </div>
    </div>
  );
}

export default Mail;
