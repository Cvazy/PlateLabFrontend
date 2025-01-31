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
  isHovered = false,
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
      config: { easing: easings.easeOutCubic },
      reset: true,
    })),
  );

  const iconSpring = useSpring({
    from: animationFrom,
    to: shouldAnimate ? animationTo : animationFrom,
    config: { easing: easings.easeOutCubic, delay: letters.length * delay },
    reset: true,
  });

  return (
    <div
      ref={ref}
      data-cursor-text={dataCursorText ? dataCursorText : null}
      className={`flex items-center no-transition gap-2 ${className}`}
    >
      <p
        data-cursor-text={dataCursorText ? dataCursorText : null}
        className={`split-parent no-transition overflow-hidden inline ${className}`}
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
            className={"no-transition"}
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
                  data-cursor-text={dataCursorText ? dataCursorText : null}
                  className="inline-block no-transition transform transition-opacity will-change-transform"
                >
                  {letter}
                </animated.span>
              );
            })}
            <span
              style={{ display: "inline-block", width: "0.3em" }}
              className={"no-transition"}
            >
              &nbsp;
            </span>
          </span>
        ))}
      </p>

      {iconSrc && (
        //@ts-ignore
        <animated.div
          style={iconSpring}
          data-cursor-text={dataCursorText ? dataCursorText : null}
          className="inline-block no-transition"
        >
          <Image
            width={32}
            height={32}
            src={iconSrc}
            alt={iconAlt || "Icon"}
            loading="lazy"
          />
        </animated.div>
      )}
    </div>
  );
};
