"use client";
import React, { useState } from "react";

import classes from "./SignUp.module.css";
import { useRouter } from "next/navigation";
const initialState = {
  email: "",
  password: "",
  name: "",
  contactDetails: "",
  medicalHistory: "",
};

export default function page() {
  const router = useRouter();
  const [regiser, setRegiser] = useState(initialState);
  const [loading, setloading] = useState(false);
  const InputsChangeHandler = (e) => {
    setRegiser({ ...regiser, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(regiser);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch(
        "http://localhost:3000/api/users",
        requestOptions
      );

      if (!res.ok) {
        throw new Error("error");
      }
      setRegiser(initialState);
      const successMess = await res.json();
      return alert(successMess.message);
    } catch (error) {
      alert("error:", error.message);
    } finally {
      setRegiser(initialState);
      setloading(false);
    }
  };

  return (
    <div className={`flex justify-center align-middle ${classes.bg}`}>
      <form className={classes.form} onSubmit={registerHandler}>
        <p className={classes.title}>Register </p>
        <p className={classes.message}>
          Signup now and get full access to our app.
        </p>
        <div className="flex">
          <label>
            <input
              value={regiser.email}
              onChange={InputsChangeHandler}
              className={classes.input}
              type="email"
              name="email"
              placeholder=""
              required
            />
            <span>Email</span>
          </label>

          <label>
            <input
              value={regiser.password}
              onChange={InputsChangeHandler}
              className={classes.input}
              type="password"
              name="password"
              placeholder=""
              required
            />
            <span>Password</span>
          </label>
        </div>

        <label>
          <input
            onChange={InputsChangeHandler}
            value={regiser.name}
            className={classes.input}
            type="text"
            name="name"
            placeholder=""
            required
          />
          <span>Name</span>
        </label>

        <label>
          <input
            onChange={InputsChangeHandler}
            className={classes.input}
            value={regiser.contactDetails}
            type="text"
            placeholder=""
            name="contactDetails"
            required
          />
          <span>Contact Detail</span>
        </label>
        <label>
          <input
            onChange={InputsChangeHandler}
            className={classes.input}
            value={regiser.medicalHistory}
            name="medicalHistory"
            type="text"
            placeholder=""
            required
          />
          <span>Medical History</span>
        </label>
        <button className={classes.submit} type="submit">
          {loading ? "Submitting..." : "Submit"}
        </button>
        <p className="signin">
          Already have an acount ?
          <a
            className=" cursor-pointer mx-4 underline"
            onClick={() => router.push("/patientLogin")}
          >
            SignIn
          </a>
        </p>
      </form>
    </div>
  );
}
