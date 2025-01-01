import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";
import ReactQueryProvider from "./ReactQueryProvider";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";

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
        className={`${pretendard.variable} font-sans antialiased bg-background`}
      >
        <ReactQueryProvider>
          <HydrationBoundary state={dehydratedState}>
            {children}
          </HydrationBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
