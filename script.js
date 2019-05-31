function daysInYear(year) {
  try {
    if(!daysAmountInYear(year)) {
      throw new TypeError("exeption");
    } 
      return daysAmountInYear(year));
    } catch (error) {
      return error.message;
    }
}

function daysAmountInYear(year) {
  if (Number.isInteger(year)) {
    if (year > 0) {
      const thisYearEnd = new Date(year + 1, 0, 1);
      const thisYearstart = new Date(year, 0, 1);
      const daysAmount = (thisYearEnd - thisYearstart)/(3600000*24);
      return daysAmount;
    }
  }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception