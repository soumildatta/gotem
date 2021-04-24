import { auth } from "../../firebase";

const success = {
  success: true,
  value: "Password reset email has been sent",
  color: "green",
};

const fail = {
  success: false,
  value: "Something went wrong, please try again",
  color: "red",
};

// function that sends a forgot password email
export const sendForgotPasswordEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    return success;
  } catch {
    return fail;
  }
};

// function that resets password
export const resetPassword = async (oobCode, password) => {
  try {
    await auth.verifyPasswordResetCode(oobCode);
    await auth.confirmPasswordReset(oobCode, password);
    return { ...success, value: "Password successfully reset" };
  } catch {
    return fail;
  }
};
