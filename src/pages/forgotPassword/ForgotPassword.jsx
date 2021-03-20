import React from "react";
import FormButton from "../../shared/FormButton";
import FormSkeleton from "../../shared/FormSkeleton";
import Input from "../../shared/Input";

const ForgotPassword = () => {
  return (
    <FormSkeleton text={"Remember your password?"} linkText={"Sign in"} linkDestination="/signin">
        <Input fieldName="Enter email" round="top" type="email"/>
        <Input fieldName="Enter code"/>
        <Input fieldName="Enter new password" type="password"/>
        <Input fieldName="Confirm new password" type="password" round="bottom"/>
        <FormButton text="Reset Password"/>
    </FormSkeleton>
  );
};

export default ForgotPassword;
