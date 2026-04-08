"use client";
import CountUp from "react-countup";

const Count = ({ end, duration }: { end: number; duration: number }) => {
  return (
    <span className="font-extrabold text-2xl lg:text-3xl">
      <CountUp end={end} duration={duration} />%
    </span>
  );
};

export default Count;
