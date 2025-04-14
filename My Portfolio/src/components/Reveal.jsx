import { useIntersectionObserver } from "./useIntersection";
import "../index.css";

const RevealOnScroll = ({ children, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className={`${className} ${isVisible ? "animate" : ""}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
