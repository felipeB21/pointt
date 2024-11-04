"use server";

import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";

export default async function Profile({
  params,
}: {
  params: { username: string[] };
}) {
  const { username } = await params;

  const singleUsername = username.join("");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/profile/${singleUsername}`
  );

  if (!response.ok) {
    notFound();
  }

  const userData = await response.json();

  if (!userData || !userData.user || !userData.user.createdAt) {
    notFound();
  }

  const formattedDate = format(
    new Date(userData.user.createdAt),
    "MMMM dd, yyyy"
  );

  return (
    <div className="wrapper mt-10">
      <div className="flex items-center gap-3">
        <Image
          src={userData.user.image}
          alt="Avatar"
          width={100}
          height={100}
          className="w-auto h-auto object-cover rounded-full"
        />
        <div>
          <h6 className="text-2xl font-semibold">{userData.user.username}</h6>
          <p className="dark:text-neutral-200 text-neutral-800">
            Joined at {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}
