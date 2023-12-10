import { prisma } from "@/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await prisma.patients.create({
      data: {
        name: body?.name,
        email: body?.email,
        password: body?.password,
        contactDetails: body.contactDetails,
        medicalHistory: body?.medicalHistory,
      },
    });

    return NextResponse.json({ message: "Account Successfully Created" });
  } catch (error) {
    return NextResponse.json({ message: "something went Wrong" });
  }
}
