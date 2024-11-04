"use client";

import Image from "next/image";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { UserSkeleton } from "@/components/user-skeleton";

interface User {
  username: string;
  image: string;
  createdAt: string;
}

export default function Profile() {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const { username } = params;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${window.location.origin}/api/profile/${username}`
        );
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setUserData(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("User not found");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading)
    return (
      <div className="wrapper mt-10">
        <UserSkeleton />
      </div>
    );
  if (error)
    return (
      <div className="wrapper mt-10">
        <p>{error}</p>
      </div>
    );

  if (!userData)
    return (
      <div className="wrapper mt-10">
        <p>No user</p>
      </div>
    );

  const formattedDate = format(new Date(userData.createdAt), "MMMM dd, yyyy");

  return (
    <div className="wrapper mt-10">
      <div className="flex items-center gap-3">
        <Image
          src={userData.image}
          alt="Avatar"
          width={100}
          height={100}
          className="w-auto h-auto object-cover rounded-full"
        />
        <div>
          <h6 className="text-2xl font-semibold">{userData.username}</h6>
          <p className="dark:text-neutral-200 text-neutral-800">
            Joined at {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}
