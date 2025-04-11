// Function to convert temperature
export const convertTemperature = (temperature, toUnit) => {
    // Ensure units are lowercase for consistency
    const to = toUnit.toLowerCase();
  
    // Conversion logic
  
      if (to === "celsius") {
        return Math.round(temperature - 273.15);
      } else if (to === "fahrenheit") {
        return Math.round((temperature - 273.15) * (9 / 5) + 32);
      }
  
    // Fallback for invalid units
    throw new Error(`Invalid temperature units: '${to}'"`);
  };
  