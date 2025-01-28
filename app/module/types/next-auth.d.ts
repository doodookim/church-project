import "next-auth";

declare module "next-auth" {
  interface User {
    access: string;
    refresh: string;
    email: string;
    is_church_member: boolean;
    is_admin: boolean;
  }

  interface Session {
    user: {
      access: string;
      refresh: string;
      email: string;
      is_church_member: boolean;
      is_admin: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access: string;
    refresh: string;
    email: string;
    is_church_member: boolean;
    is_admin: boolean;
  }
}
