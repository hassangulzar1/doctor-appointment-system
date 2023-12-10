"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import classes from "./patientlogin.module.css";
import { useRouter } from "next/navigation";
const initialState = {
  email: "",
  password: "",
};

export default function Page() {
  const [loginData, setLoginData] = useState(initialState);
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const patientLoginHandler = async (e) => {
    e.preventDefault();
    const credentials = {
      for: "patient",
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
        alert("Login successful:", result);
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
          login As a Patient
        </h1>
        <div className={classes.login}>
          <form className={classes.form} onSubmit={patientLoginHandler}>
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
            <p className=" text-lime-50">
              Don't Have Account?
              <a
                onClick={() => router.push("/patientLogin/signUp")}
                className=" mx-2 underline cursor-pointer"
              >
                SignUp
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
