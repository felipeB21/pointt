/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
/* eslint-enable @typescript-eslint/no-unused-vars */

import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  username: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
  }
}
