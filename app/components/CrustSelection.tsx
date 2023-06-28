import React from "react";

interface CrustSelectionProps {
  crust: string;
  setCrust: (crust: string) => void;
}

export const CrustSelection: React.FC<CrustSelectionProps> = ({
  crust,
  setCrust,
}) => {
  return (
    <div className="flex justify-center items-center lg:justify-start">
      <div className="flex gap-x-12 mb-8 font-medium">
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary"
            type="radio"
            name="crust"
            value="traditional"
            checked={crust === "traditional"}
            onChange={(e) => setCrust(e.target.value)}
          />
          Traditional
        </label>
        <div>
          <label className="flex items-center gap-x-2 cursor-pointer">
            <input
              className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary"
              type="radio"
              name="crust"
              value="thin"
              checked={crust === "thin"}
              onChange={(e) => setCrust(e.target.value)}
            />
            Thin
          </label>
        </div>
      </div>
    </div>
  );
};
