import clsx from "clsx";
interface IBoxLayout {
  classNamePlus?: string;
  width: 484 | 650;
  children: React.ReactNode;
}

export default function BoxLayout({
  classNamePlus,
  width,
  children,
}: IBoxLayout) {
  return (
    <div
      className={clsx(
        "px-[40px] w-full h-auto mb-[150px] ",
        width === 484 && "max-w-[564px]",
        width === 650 && "max-w-[730px]"
      )}
    >
      <div
        className={clsx(
          `w-full bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.05)] px-[30px]`,
          classNamePlus
        )}
      >
        {children}
      </div>
    </div>
  );
}
