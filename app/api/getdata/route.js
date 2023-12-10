import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const patientData = await prisma.patients.findMany();
    const doctorData = await prisma.doctors.findMany();

    return NextResponse.json([patientData, doctorData]);
  } catch (error) {
    return NextResponse.json({ message: "something went Wrong" });
  }
}
