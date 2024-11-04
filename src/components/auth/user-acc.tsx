import Image from "next/image";
import { auth } from "../../../auth";
export async function UserAcc() {
  const session = await auth();

  if (!session) return;

  return (
    <div className="flex items-center gap-3">
      <Image
        src={session.user.image as string}
        alt="Avatar"
        width={24}
        height={24}
        className="w-auto h-auto object-cover rounded-full"
      />
      <p>{session.user.username}</p>
    </div>
  );
}
