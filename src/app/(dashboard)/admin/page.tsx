import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
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
  }

  return (
    <h2 className="text-2xl">Please login to see the content of admin page</h2>
  );
};

export default AdminPage;
