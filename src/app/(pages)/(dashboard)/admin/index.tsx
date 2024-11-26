"use client";

import { buttonVariants } from "@/components/ui/button";
import { authOnly } from "@/hocs/auth-only";
import { Session } from "next-auth";
import Link from "next/link";
import { FC } from "react";

type AdminProps = {
  session: Session;
};

const Admin: FC<AdminProps> = ({ session }) => {
  return (
    <>
      <h2 className="text-2xl">
        Admin page - welcome back {session?.user.username}
      </h2>
      <Link className={buttonVariants()} href="/admin/posts">
        Vedi i miei post
      </Link>
    </>
  );
};

export default authOnly({
  ChildComponent: Admin, // The page component itself
  authorizedRoles: [],
});
