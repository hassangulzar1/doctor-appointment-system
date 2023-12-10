import React from "react";

export default function Doctors(props) {
  return (
    <div className="h-2/5 w-2/5 flex flex-col bottom-2 border-current justify-center align-middle">
      <h1 className="text-2xl text-center my-5">Doctor name</h1>
      <button className=" underline">Book-Appointment</button>
    </div>
  );
}
