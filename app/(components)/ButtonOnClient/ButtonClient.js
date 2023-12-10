"use client";
import React from "react";
import Button from "../loginButton/Button";
export default function ButtonClient() {
  return (
    <div className=" flex">
      <Button path="/patientLogin" title="Patient" />
      <Button path="/doctorLogin" title="Doctor" />
    </div>
  );
}
