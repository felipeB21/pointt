import { auth } from "../../../auth";
import { LoginDialog } from "../login-dialog";
import { DropdownMenuUser } from "./drop-down";
export default async function SessionToggle() {
  const session = await auth();
  return (
    <div>
      {session ? (
        <DropdownMenuUser userSlug={session.user.username} />
      ) : (
        <LoginDialog />
      )}
    </div>
  );
}
