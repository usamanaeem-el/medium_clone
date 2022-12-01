import { Auth } from "aws-amplify";
export const signUp = async (email, password) => {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
};
