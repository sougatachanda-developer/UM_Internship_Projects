import React, { useState } from 'react';

function TailwindToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-2 w-6 items-center rounded-full transition-colors duration-300 ${
        enabled ? 'bg-gray-300' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
          enabled ? 'translate-x-3' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

export default TailwindToggle;
