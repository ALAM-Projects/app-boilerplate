import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HandMetal } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className=" bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <HandMetal />
        </Link>
        {session?.user?.username ? (
          <LogoutButton />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
