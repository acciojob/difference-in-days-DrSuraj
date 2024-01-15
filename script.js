var dateDiffInDays = function (date1, date2) {
  // Parse the input dates as objects
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

  // Calculate the difference in milliseconds
  const timeDiff = parsedDate2.getTime() - parsedDate1.getTime();

  // Convert the difference to days
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  return daysDiff;
};

// Example usage
const dateOne = prompt("Enter Start Date (YYYY-MM-DD):");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD):");

alert(dateDiffInDays(dateOne, dateTwo));
