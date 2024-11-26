import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Admin from ".";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  return <Admin session={session} />;
};

export default AdminPage;
