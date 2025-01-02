import ContentBanner from "../module/components/layout/content-banner";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContentBanner />
      <section className="w-full max-w-[1024px] flex justify-between items-start mx-auto my-[100px]">
        {children}
      </section>
    </>
  );
}
