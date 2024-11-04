import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma";

export async function GET(
  req: Request,
  { params }: { params: { username: string[] } }
) {
  const { username } = await params;

  if (!username || username.length === 0) {
    return NextResponse.json({ msg: "No username provided" }, { status: 400 });
  }

  const singleUsername = username[0];

  try {
    const user = await prisma.user.findUnique({
      where: { username: singleUsername },
    });

    if (!user) {
      return NextResponse.json({ msg: "No user" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
