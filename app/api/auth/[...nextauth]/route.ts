import { TSignIn } from "@/app/module/types/sign-in";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
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
    Credentials({
      id: "kakaoId",
      name: "kakaoName",
      credentials: {
        code: { type: "text" },
      },
      async authorize(credentials) {
        const { code } = credentials as {
          code: string;
        };

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/kakao/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw (
            data || {
              error: "로그인 오류 입니다.",
              ok: res.ok,
              status: res.status,
              url: res.url,
            }
          );
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
