import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await prisma.appointments.create({
      data: {
        patientName: body?.name,
        patientDecise: body?.email,
        dateTime: body?.password,
        notes: body.contactDetails,
        patientContact: body?.medicalHistory,
      },
    });

    return NextResponse.json({
      message: "Appointment-Booked Successfully Created",
    });
  } catch (error) {
    return NextResponse.json({ message: "something went Wrong" });
  }
}
