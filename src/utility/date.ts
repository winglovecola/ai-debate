// Create a new Date object using the timestamp

export function formatDate(timestamp: number, mode?:string): string {

    if (!timestamp)
    {
        return '';
    }

    if (timestamp.toString().length <= 10 ) 
    {
        timestamp = Math.floor(timestamp * 1000);
    }

  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');



  let timeStr = '';
  if (mode === "hh:mm a")
  {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12; // Convert to 12-hour format
    const displayMinutes = String(minutes).padStart(2, '0');
    timeStr = `\u00A0\u00A0\u00A0 ${displayHours}:${displayMinutes} ${amOrPm}`;
  }


  return `${year}-${month}-${day}` + timeStr;
}


export function calculateMonthsPassed(currentTime: number, activeTime: number) {
    
    if (currentTime.toString().length === 13 ) 
    {
        currentTime = Math.floor(currentTime / 1000);
    }
    
    const millisecondsInMonth = 30 * 24 * 60 * 60 * 1000; // Assuming 30 days in a month
    const millisecondsInDay = 24 * 60 * 60 * 1000; // Assuming 30 days in a month

    const millisecondsPassed = currentTime - activeTime;
    const monthsPassed = millisecondsPassed / millisecondsInMonth;

    if (monthsPassed < 1) {
        let daysPassed = millisecondsPassed / millisecondsInDay;

        daysPassed = Math.ceil(daysPassed);

        return daysPassed + ' days passed'; // Convert to string if it's an integer
    }
    else
    {
        if (Number.isInteger(monthsPassed)) {
            return monthsPassed.toString() + ' months passed'; // Convert to string if it's an integer
        } else {
            // Format the result to have one decimal place
            const formattedMonths = monthsPassed.toFixed(1);
            return formattedMonths.toString() + ' months passed';
        }
    }
    }




    export function awsTimestamp(jsTimestamp: number) {
    
        // Check if jsTimestamp is a number
        if (typeof jsTimestamp !== 'number' || isNaN(jsTimestamp)) {
            return 'error: jsTimestamp is valid';
        }
    
        return Math.floor(jsTimestamp / 1000);
    }