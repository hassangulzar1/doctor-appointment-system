"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import classes from "./DoctorSignup.module.css";
import { useRouter } from "next/navigation";

const initialState = {
  email: "",
  password: "",
};

export default function Page() {
  const router = useRouter();
  const [loginData, setLoginData] = useState(initialState);
  const [loading, setloading] = useState(false);
  const docterLoginHandler = async (e) => {
    e.preventDefault();
    const credentials = {
      for: "doctor",
      email: loginData.email,
      password: loginData.password,
    };

    try {
      setloading(true);
      const result = await signIn("credentials", {
        redirect: false,
        ...credentials,
      });

      if (result.error) {
        throw new Error("Login failed:", result.error);
      } else {
        alert("Login successful");
        router.push("/dashboard");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setloading(false);
      setLoginData(initialState);
    }
  };

  const InputsChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`flex justify-center align-middle ${classes.bg}`}>
      <div className={classes.main}>
        <h1 className=" bg-white text-center py-4 text-2xl font-bold">
          login As a doctor
        </h1>
        <div className={classes.login}>
          <form className={classes.form} onSubmit={docterLoginHandler}>
            <label className={classes.label} htmlFor="chk" aria-hidden="true">
              SignIn
            </label>
            <input
              value={loginData.email}
              onChange={InputsChangeHandler}
              className={classes.input}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              value={loginData.password}
              onChange={InputsChangeHandler}
              className={classes.input}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">{loading ? "Loading..." : "Sign In"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
