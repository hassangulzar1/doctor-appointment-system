"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import classes from "./dashboard.module.css";

export default function Page() {
  const [patientData, setPatientData] = useState([]);
  const [DoctorData, setDoctorData] = useState([]);

  const fetching = async () => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        "http://localhost:3000/api/getdata",
        requestOptions
      );
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      let data = await res.json();
      setPatientData(data[0]);
      setDoctorData(data[1]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  const { data: session } = useSession();

  if (!session) {
    alert("not found");
  }

  const user = session?.user;

  const ifPatient = patientData.filter((item) => {
    if (item.name == user.name && item.email == user.email) {
      return item;
    }
  });

  const ifDoctor = DoctorData.filter((item) => {
    if (item.name == user.name && item.email == user.email) {
      return item;
    }
  });

  return (
    <div className={classes.mainDiv}>
      {ifPatient.length != 0 && (
        <div className={classes.patient}>
          <h1 className=" text-center text-3xl bg-black text-lime-50 py-5">
            Booked Your Doctor
          </h1>

          <h1 className=" text-center text-2xl mt-5 my-4">Doctors</h1>
        </div>
      )}

      {ifPatient.length != 0 && (
        <div className="h-2/5 w-2/5 flex flex-col bottom-2 border-current justify-center align-middle">
          <h1 className="text-2xl text-center my-5">{DoctorData[0].name}</h1>
          <button className=" underline">Book-Appointment</button>
        </div>
      )}

      {ifDoctor.length != 0 && (
        <div className={classes.doctor}>
          <h1 className=" text-center text-3xl bg-black text-lime-50 py-5">
            Hello Doctor: {user.name}
          </h1>

          <h1 className=" text-center text-2xl mt-5 my-4">Appointments</h1>

          <table className="list" id="employeeList">
            <thead>
              <tr className=" gap-7">
                <th className=" mx-6">Patient Name</th>
                <th>Patient Decise</th>
                <th>Booked-Time</th>
                <th>PatientContact</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {usersData?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.sallary}</td>
                <td>
                </td>
              </tr>
            ))} */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
