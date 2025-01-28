import React from "react";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full md:w-[65%] lg:w-[calc(100%-334px)]">
      {children}
    </section>
  );
}
