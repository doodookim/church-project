import { TSignIn } from "@/app/module/types/sign-in";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      id: "CredentialId",
      name: "CredentialsName",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as TSignIn;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/login/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "로그인 오류 입니다.");
        }
        return data;
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.access = user.access;
        token.refresh = user.refresh;
        token.email = user.email;
        token.is_church_member = user.is_church_member;
        token.is_admin = user.is_admin;
      }
      return token;
    },
    session({ session, token }) {
      session.user.access = token.access;
      session.user.refresh = token.refresh;
      session.user.email = token.email;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
