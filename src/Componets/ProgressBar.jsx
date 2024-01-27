

// const ProgressBar = ({ value }) => {
//   return (
//     <div className="flex relative w-4/5 h-1  transition duration-500">
//       <div className="absolute w-full h-full rounded-full bg-gray-300">
//         <div
//           className="h-full rounded-full bg-green-500 transition duration-500"
//           style={{ width: `${value * 100}%` }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;

import React, { useEffect, useState } from 'react';

const CircularLoader = ({ size, strokeWidth, color, value }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animatedProgress = value * circumference;
    setProgress(animatedProgress);
  }, [value, circumference]);

  const loaderStyle = {
    width: size,
    height: size,
  };

  return (
    <svg
      style={loaderStyle}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
        fill="transparent"
        transition="stroke-dashoffset 0.5s ease-in-out"
      />
    </svg>
  );
};

export default CircularLoader;

