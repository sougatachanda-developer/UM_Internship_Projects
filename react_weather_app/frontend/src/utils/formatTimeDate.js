export function formatTimeDate(timestamp) {
    // Convert the timestamp from seconds to milliseconds
    const date = new Date(timestamp * 1000);
  
    // Extract the components
    const readableDate = date.toLocaleDateString(); // e.g., "4/12/2025"
    const readableTime = date.toLocaleTimeString(); // e.g., "12:45:19 AM"
    const day = date.toLocaleDateString('en-US', { day: 'numeric' }); // e.g., "12"
    const month = date.toLocaleDateString('en-US', { month: 'long' }); // e.g., "April"
    const year = date.getFullYear(); // e.g., 2025
    const hours = date.getHours(); // e.g., 12
    const minutes = date.getMinutes(); // e.g., 45
    const seconds = date.getSeconds(); // e.g., 19
  
    return {
      readableDate,
      readableTime,
      day,
      month,
      year,
      hours,
      minutes,
      seconds,
    };
  }