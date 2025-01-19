import ContentBanner from "../module/components/layout/content-banner";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContentBanner />
      <section className="md:px-[60px] px-[30px] w-full max-w-[1144px] flex justify-between items-start mx-auto my-[100px]">
        {children}
      </section>
    </>
  );
}
