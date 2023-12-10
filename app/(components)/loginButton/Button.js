"use client";
import React from "react";
import classes from "./Button.module.css";
import { useRouter } from "next/navigation";

export default function Button(props) {
  const router = useRouter();

  const NavigateToHandler = () => {
    router.push(props.path);
  };
  return (
    <button
      className={classes.button}
      onClick={NavigateToHandler}
      data-text="Awesome"
    >
      <span className={classes["actual-text"]}>&nbsp;{props.title}&nbsp;</span>
      <span aria-hidden="true" className={classes["hover-text"]}>
        &nbsp;{props.title}&nbsp;
      </span>
    </button>
  );
}
