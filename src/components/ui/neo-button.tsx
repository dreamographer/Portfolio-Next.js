import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { FiSend } from "react-icons/fi";

export default function NeumorphismButton({
  children,
  classname,
  Icon,
}: {
  children: React.ReactNode;
  Icon: IconType;
  classname?:string;
}) {
  return (
    <button
      className={cn(
        `
      bg-white/70
      dark:bg-white
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        dark:shadow-none
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-blue-500
    `,
        classname
      )}
    >
      <Icon />
      <span>{children}</span>
    </button>
  );
}
