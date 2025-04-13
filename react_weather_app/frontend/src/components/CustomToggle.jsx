import { useState, useEffect } from 'react';

const CustomToggle = ({
  labels = ['Off', 'On'],
  values = [false, true],
  onToggle,
  defaultValue = values[0],
}) => {
  const [active, setActive] = useState(defaultValue === values[1]);

  useEffect(() => {
    if (onToggle) {
      onToggle(active ? values[1] : values[0]);
    }
  }, [active]);

  return (
    <div className="flex items-center space-x-2">
      {/* Left Label */}
      {/* can add inside span ${!active ? 'text-blue-600' : 'text-gray-400'} for active color */}
      <span className={`text-sm font-medium ${!active ? 'text-white' : 'text-gray-300'}`}>
        {labels[0]}
      </span>

      {/* Toggle Switch */}
      <div
        className={`relative w-9 h-3 flex items-center rounded-full cursor-pointer transition-all duration-300 ${
          active ? 'bg-gray-300' : 'bg-gray-300'
        }`}
        onClick={() => setActive(!active)}
      >
        <div
          className={`absolute bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
            active ? 'translate-x-4' : 'transition-x-0'
          }`}
        />
      </div>

      {/* Right Label */}
      {/* can add ${active ? 'text-green-600' : 'text-gray-400'} for selected label */}
      <span className={`text-sm font-medium ${!active ? 'text-gray-300' : 'text-white'}`}>
        {labels[1]}
      </span>
    </div>
  );
};

export default CustomToggle;
