"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import classes from "./dashboard.module.css";
export default function page() {
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
  const router = useRouter();
  // const { data: session } = useSession();
  //
  //   if (!session) {
  //     router.push("/patientLogin");
  //   }
  // const user = session?.data;

  return (
    <div className={classes.mainDiv}>
      <div className={classes.doctor}>
        <h1 className=" text-center text-3xl bg-black text-lime-50 py-5">
          Hello Doctor:
        </h1>
      </div>
    </div>
  );
}
