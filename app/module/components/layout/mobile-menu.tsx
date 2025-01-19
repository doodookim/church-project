import { getServerSession } from "next-auth";
import MobileMenuLIst from "./mobile-menu-list";

export default async function MobileMenu() {
  const session = await getServerSession();
  const email = session?.user.email;
  return <MobileMenuLIst email={email} />;
}
