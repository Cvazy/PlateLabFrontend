import { useSprings, animated, useSpring, easings } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const SplitText = ({
  text = "",
  iconSrc = "",
  iconAlt = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  isHovered = false, // По умолчанию выключен ховер
  dataCursorText = "",
}) => {
  const words = text.split(" ").map((word) => word.split(""));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const shouldAnimate = inView || isHovered;

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: shouldAnimate ? animationTo : animationFrom,
      delay: i * delay,
      config: { easing: easings.easeOutCubic }, // Исправлено
      reset: true,
    })),
  );

  const iconSpring = useSpring({
    from: animationFrom,
    to: shouldAnimate ? animationTo : animationFrom,
    config: { easing: easings.easeOutCubic, delay: letters.length * delay }, // Исправлено
    reset: true,
  });

  return (
    <div
      ref={ref}
      data-cursor-text={dataCursorText}
      className={`flex items-center gap-2 ${className}`}
    >
      <p
        data-cursor-text={dataCursorText}
        className="split-parent overflow-hidden inline"
        style={{
          textAlign: textAlign as React.CSSProperties["textAlign"],
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word.map((letter, letterIndex) => {
              const index =
                words
                  .slice(0, wordIndex)
                  .reduce((acc, w) => acc + w.length, 0) + letterIndex;

              return (
                //@ts-ignore
                <animated.span
                  key={index}
                  style={springs[index]}
                  data-cursor-text={dataCursorText}
                  className="inline-block transform transition-opacity will-change-transform"
                >
                  {letter}
                </animated.span>
              );
            })}
            <span style={{ display: "inline-block", width: "0.3em" }}>
              &nbsp;
            </span>
          </span>
        ))}
      </p>

      {iconSrc && (
        //@ts-ignore
        <animated.div
          style={iconSpring}
          data-cursor-text={dataCursorText}
          className="inline-block"
        >
          <Image
            width={24}
            height={24}
            src={iconSrc}
            alt={iconAlt || "Icon"}
            loading="lazy"
          />
        </animated.div>
      )}
    </div>
  );
};
