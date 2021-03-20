import React from "react";
import { useState } from "react";
import FormButton from "../../shared/FormButton";
import FormSkeleton from "../../shared/FormSkeleton";
import Input from "../../shared/Input";
// you are using 'class' in this file use 'className' instead
const Signup = () => {
  /* TO USE LATER
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }*/

  const [email, setEmail] = useState("");
  //const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [persona, setPersona] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, persona);
  };

  return (
    <FormSkeleton
      text="Already have an account?"
      linkText="Log In"
      linkDestination="/signin"
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

      <div className="my-4">
        <label> Sign up as </label>
        <select
          className="w-full p-2 rounded-md"
          onChange={(e) => setPersona(e.target.value)}
        >
          <option value="driver" className="p-2 hover:bg-gray-200">
            {" "}
            Driver{" "}
          </option>
          <option value="passenger" className="p-2 hover:bg-gray-200">
            {" "}
            Passenger{" "}
          </option>
        </select>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
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

      <div>
      <FormButton text="Create Account"/>
      </div>
    </FormSkeleton>
  );
};

export default Signup;
