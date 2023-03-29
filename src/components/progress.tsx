import React from "react";
interface ProgressBarProps {
  progressPercent:number
}
const ProgressBar = ({progressPercent}:ProgressBarProps) => {
  return (
    <div className="space-y-3">
      <div className="h-4 w-full border-standard-red bg-standard-black border-2 rounded-full py-2 flex items-center">
        <div
          className="h-4 font-xs bg-standard-red border-standard-black border-2 rounded-full flex items-center justify-center py-1"
          style={{ width: `${progressPercent}%` }}
        >
          <label className="select-none">{progressPercent}%</label>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
