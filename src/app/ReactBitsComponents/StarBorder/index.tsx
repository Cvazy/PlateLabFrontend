import { ReactNode, ElementType } from "react";

interface StarBorderProps {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  dataCursorText?: string;
  children: ReactNode;
  [key: string]: any;
}

export const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  dataCursorText,
  children,
  ...rest
}: StarBorderProps) => {
  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden`}
      data-cursor-text={dataCursorText ? dataCursorText : null}
      {...rest}
    >
      <div
        data-cursor-text={dataCursorText ? dataCursorText : null}
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        data-cursor-text={dataCursorText ? dataCursorText : null}
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        data-cursor-text={dataCursorText ? dataCursorText : null}
        className={`${className} relative z-1 border border-solid border-gray`}
      >
        {children}
      </div>
    </Component>
  );
};
