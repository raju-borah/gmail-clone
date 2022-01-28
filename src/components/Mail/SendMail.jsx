import React, { useState } from "react";
import "./SendMail.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { CgArrowsExpandRight } from "react-icons/cg";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { store } from "react-notifications-component";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function SendMail() {
  const dispatch = useDispatch();
  const [message, setmessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to: data.to,
        subject: data.subject,
        message: message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    store.addNotification({
      message: "Message send successfully",
      type: "success",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    dispatch(closeSendMessage());
  };
  const modules = {
    toolbar: false,
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <span>New Message</span>
        <div className="sendMail__header--sideOptions">
          <IconButton>
            <MinimizeIcon className="sendMail__header--sideButton" />
          </IconButton>
          <IconButton>
            <CgArrowsExpandRight className="sendMail__header--sideButton" />
          </IconButton>
          <IconButton onClick={() => dispatch(closeSendMessage())}>
            <CloseIcon className="sendMail__header--sideButton" />
          </IconButton>
        </div>
      </div>
      <form className="sendMail__body" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="to"
          name="to"
          fullWidth
          className="sendMail__inputs"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to?.type === "required" && (
          <p className="error">Mail is required</p>
        )}
        <Input
          name="subject"
          placeholder="suject"
          fullWidth
          className="sendMail__inputs"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject?.type === "required" && (
          <p className="error">Subject is required</p>
        )}
        <ReactQuill
          theme="snow"
          modules={modules}
          name="message"
          onChange={(e) => setmessage(e)}
          className="sendMail__inputs--message"
        />

        {errors.message?.type === "required" && (
          <p className="error">Message is required</p>
        )}
        <div className="sendMail__option">
          <Button variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
