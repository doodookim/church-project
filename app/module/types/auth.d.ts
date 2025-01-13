import "next-auth";

declare module "next-auth" {
  interface User {
    access: string;
    refresh: string;
    email: string;
    is_church_member: string;
    is_admin: string;
  }

  interface Session {
    user: {
      access: string;
      refresh: string;
      email: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access: string;
    refresh: string;
    email: string;
    is_church_member: string;
    is_admin: string;
  }
}
