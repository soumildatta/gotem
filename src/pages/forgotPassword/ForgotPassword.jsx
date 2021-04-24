import React, { useState } from "react";
import FormButton from "../../shared/FormButton";
import FormSkeleton from "../../shared/FormSkeleton";
import Input from "../../shared/Input";
import { sendForgotPasswordEmail } from "./utils";

//using built-in firebase functions to send password reset email 
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const hasMessage = Boolean(message.length);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Boolean(email.length)) {
      const response = await sendForgotPasswordEmail(email);
      setColor(response.color);
      setMessage(response.value);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <FormSkeleton
      text={"Remember your password?"}
      linkText={"Sign in"}
      linkDestination="/signin"
      onSubmit={handleSubmit}
    >
      <Input
        fieldName="Enter email"
        round="all"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {hasMessage && <p className={`text-${color}-500`}>{message}</p>}
      <FormButton text="Send reset email" />
    </FormSkeleton>
  );
};

export default ForgotPassword;
