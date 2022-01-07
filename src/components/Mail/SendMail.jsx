import React from "react";
import "./SendMail.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { CgArrowsExpandRight } from "react-icons/cg";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextareaAutosize } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const dispatch = useDispatch();
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
        message: data.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
          type="email"
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

        <TextareaAutosize
          name="message"
          className="sendMail__inputs--message"
          aria-label="minimum height"
          minRows={10}
          {...register("message", { required: true })}
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
