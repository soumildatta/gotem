import React, { useState, useEffect } from "react";
import FormButton from "../../shared/FormButton";
import FormSkeleton from "../../shared/FormSkeleton";
import Input from "../../shared/Input";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import { db } from "../../firebase";

const Signin = () => {
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function redirect() {
    db.collection("Users")
      .doc(email)
      .get()
      .then((doc) => {
        if (doc.data().persona === "passenger") {
          console.log("true");
          history.push("/dashboard");
        } else {
          history.push("/requests");
        }
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      redirect();
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <FormSkeleton
      text="New User?"
      linkText="Sign Up"
      linkDestination="/signup"
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

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <Link
            to="/forgot-password"
            className="font-medium text-primaryBlue hover:text-blue-600"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
      <FormButton text="Log In" />
    </FormSkeleton>
  );
};

export default Signin;
