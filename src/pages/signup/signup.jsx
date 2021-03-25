import React from "react";
import { useState } from "react";
import Input from "../../shared/Input";
import { useHistory, Link } from "react-router-dom";
import FormButton from "../../shared/FormButton";
import FormSkeleton from "../../shared/FormSkeleton";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  /* TO USE LATER
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }*/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [persona, setPersona] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { signup, currentUser } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      if (persona == "passenger") {
        history.push("/dashboard");
      } else {
        history.push("/requests");
      }
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <FormSkeleton
      text="Already have an account?"
      linkText="Log In"
      linkDestination="/signin"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
          {error}
        </div>
      )}
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

      <div>
        <FormButton disabled={loading} text="Create Account" />
      </div>
    </FormSkeleton>
  );
};

export default Signup;
