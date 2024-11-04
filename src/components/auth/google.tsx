import { signIn } from "../../../auth";

export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 w-full py-1.5 rounded-full"
      >
        Sign in with Google
      </button>
    </form>
  );
}
