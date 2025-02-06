import { Progress } from "antd";
import { useState, useRef, useEffect } from "react";

const HorizontalProgress = () => {
  // Generate random number between 40 and 80
  const getRandomProgress = () =>
    Math.floor(Math.random() * (80 - 40 + 1)) + 40;
  const [progressValues, setProgressValues] = useState(
    Array(20)
      .fill(0)
      .map(() => getRandomProgress())
  );
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse wheel events with preventDefault
  const handleWheel = (e) => {
    e.preventDefault(); // Prevent page scroll
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up/leave to stop dragging
  const stopDragging = () => {
    setIsDragging(false);
  };

  // Add wheel event listener with passive: false
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      container.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  const twoColors = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };
  return (
    <div className="relative w-full max-w-full">
      <div
        ref={containerRef}
        className="w-full overflow-x-auto select-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseEnter={() => setShowScrollbar(true)}
        onMouseLeave={() => setShowScrollbar(false)}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#3B82F6 #E5E7EB",
        }}
        className="
        w-full 
        overflow-x-auto 
        select-none 
        cursor-grab 
        active:cursor-grabbing
        scrollbar-thin
        scrollbar-track-gray-200
        scrollbar-thumb-blue-500
        hover:scrollbar-thumb-blue-600
        pb-4
      "
      >
        <div className="flex gap-4 p-4 min-w-max">
          {progressValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 transition-transform hover:scale-105"
            >
              {" "}
              <p>Progress {index + 1}</p>
              <Progress type="circle" percent={value} size={80} strokeColor={twoColors}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalProgress;
