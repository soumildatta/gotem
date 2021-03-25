import React from "react";
import { useState } from "react";
import FormButton from "../../shared/FormButton";
import FormSkeleton from "../../shared/FormSkeleton";
import Input from "../../shared/Input";

// you are using 'class' in this file use 'className' instead
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <FormSkeleton
      text="New User?"
      linkText="Sign Up"
      linkDestination="/signup"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="remember" value="true" />

      <Input
        onChange={(e) => setEmail(e.target.value)}
        fieldName="email"
        round="top"
        type="email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        fieldName="password"
        round="bottom"
        type="password"
      />

      <div class="flex items-center justify-between">
        <div class="flex items-center my-4">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-primaryBlue hover:text-blue-600">
            Forgot your password?
          </a>
        </div>
      </div>
      <FormButton text="Log In"/>
    </FormSkeleton>
  );
};

export default Signin;
