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
        `w-full bg-white mb-[150px] rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.05)]`,
        classNamePlus,
        width === 484 && "max-w-[484px]",
        width === 650 && "max-w-[650px]"
      )}
    >
      {children}
    </div>
  );
}
