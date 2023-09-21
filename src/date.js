/* FUNCTION Define */
// Convert Date to ISO Date
export function cnvrtDateISO(date){
  return date.toISOString().split("T")[0];
}

// Create Max Date
function dateMax(date, days) {
  const dateNew = new Date(date);
  dateNew.setDate(dateNew.getDate() + days);
  return dateNew;
}

// Create Min Date
function dateMin(date, days) {
  const dateNew = new Date(date);
  dateNew.setDate(dateNew.getDate() - days);
  return dateNew;
}

// Add Dates to Form
export function addFormDate(element, date, min, max) {
  let dateNew = cnvrtDateISO(date);
  let dateStart = cnvrtDateISO(dateMin(date, min));
  let dateEnd = cnvrtDateISO(dateMax(date, max));

  element.setAttribute("value", dateNew);
  element.setAttribute("min", dateStart);
  element.setAttribute("max", dateEnd);
}
