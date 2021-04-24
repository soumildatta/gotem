import React, { useState } from "react";
import FormButton from "../../shared/FormButton";
import FormSkeleton from "../../shared/FormSkeleton";
import Input from "../../shared/Input";
import { useLocation } from "react-router-dom";
import { resetPassword } from "./utils";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const hasMessage = Boolean(message.length);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const isValidSubmission = () => {
    return (
      Boolean(password.length) &&
      Boolean(confirm.length) &&
      password === confirm
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidSubmission()) {
      const oobCode = query.get("oobCode");
      const mode = query.get("mode");
      if (oobCode && mode) {
        const response = await resetPassword(oobCode, password);
        setColor(response.color);
        setMessage(response.value);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
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
        fieldName="Enter Password"
        round="top"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        fieldName="Confirm Password"
        round="bottom"
        type="password"
        onChange={(e) => setConfirm(e.target.value)}
      />
      {hasMessage && <p className={`text-${color}-500`}>{message}</p>}

      <FormButton text="Reset Password" />
    </FormSkeleton>
  );
};

export default ResetPassword;
