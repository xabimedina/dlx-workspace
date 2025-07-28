import type { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const paragraphTextVariants = cva(
  "text-lg font-medium max-w-[600px] font-montserrat",
  {
    variants: {
      color: {
        jet: "text-jet",
        saffron: "text-saffron",
        smoke: "text-smoke",
      },
    },
    defaultVariants: {
      color: "jet",
    },
  }
);

const paragraphDecorativeVariants = cva(
  "absolute w-52 h-14 border-b-[14px] border-l-[14px] -left-10 -bottom-8",
  {
    variants: {
      borderColor: {
        jet: "border-jet",
        saffron: "border-saffron",
        smoke: "border-smoke",
      },
    },
    defaultVariants: {
      borderColor: "saffron",
    },
  }
);

interface DlxParagraphProps extends VariantProps<typeof paragraphTextVariants>, VariantProps<typeof paragraphDecorativeVariants> {
  children: React.ReactNode;
}

export const DlxParagraph: FC<DlxParagraphProps> = ({ color = "jet", borderColor = "saffron", children }) => {
  return (
    <div className="relative">
      <div className={paragraphTextVariants({ color })}>{children}</div>
      <div className={paragraphDecorativeVariants({ borderColor })} />
    </div>
  );
};
