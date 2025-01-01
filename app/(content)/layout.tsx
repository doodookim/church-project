import { GetServerSidePropsContext } from "next";
import ContentLayout from "../module/components/layout/content-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContentLayout />
      {children}
    </>
  );
}
