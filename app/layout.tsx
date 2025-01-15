import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";
import ReactQueryProvider from "./ReactQueryProvider";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";
import Header from "./module/components/layout/header";
import Footer from "./module/components/layout/footer";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./AuthProvider";
import Modal from "./module/components/common/modal";

export const metadata: Metadata = {
  title: "생명의 빛 교회",
  description: "생명의 빛 교회 페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} font-sans antialiased bg-background text-gray-03`}
      >
        <ReactQueryProvider>
          <HydrationBoundary state={dehydratedState}>
            <AuthProvider>
              <Header />
              <main className="min-h-[calc(100vh-190px)]">{children}</main>
              <Footer />
              <Modal />
            </AuthProvider>
          </HydrationBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
