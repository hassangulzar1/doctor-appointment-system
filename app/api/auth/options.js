import { prisma } from "@/config/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.doctors.findFirst({
          where: {
            AND: [
              {
                email: credentials.email,
              },
              {
                password: credentials.password,
              },
            ],
          },
        });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/doctorLogin", // Customize the login page URL
  },
};
