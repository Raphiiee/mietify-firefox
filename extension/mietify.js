//window.alert(window.location.href);
 
// Parent wo die neuen Werte gespeichert werden
var parentTotalRent = document.getElementsByClassName("clLCjW")[0];

// einlesen von werten von willhaben
var totalRentString = document.getElementsByClassName("iYbzSg")[0]?.textContent;
if (totalRentString?.includes(',')) {
    totalRentString = totalRentString.substring(0,totalRentString.indexOf(','));
}
var totalRent = parseFloat(totalRentString?.replace(/\D/g,''));
var livingSpace = parseFloat(document.getElementsByClassName("gDgZxY")[0]?.textContent.replace(',','.'));
var flatRooms = parseFloat(document.getElementsByClassName("gDgZxY")[1]?.textContent);
var kiloWattHoursPerSquareMeterPerYear = parseFloat(document.getElementsByClassName("bCpCx")[0]?.textContent.replace(',','.'));
if (livingSpace < 20) {
    livingSpace = NaN;
}

// Calculation 
var costPerSquareMeter = totalRent / livingSpace;

var personCount = 2;
var warmWaterPerPersonInKiloWattHours = 1000;
var heatingCostPerKiloWattHour = 0.16;
var heatingEngeryPerYear = livingSpace * 1.25 * kiloWattHoursPerSquareMeterPerYear + warmWaterPerPersonInKiloWattHours * personCount;
var heatingCostPerYear = heatingEngeryPerYear * heatingCostPerKiloWattHour;
var heatingCostPerMonth = heatingCostPerYear / 12;

var totalRentWithHeatingPerMonth = totalRent + heatingCostPerYear / 12;

// Create new nodes
var flatRoomsSpan = document.createElement("span");
var flatRoomsNode = document.createTextNode(flatRooms + " Zimmer");
flatRoomsSpan.appendChild(flatRoomsNode);
flatRoomsSpan.classList.add("squareMeter");

var squareMeterSpan = document.createElement("span");
var squareMeterNode = document.createTextNode(livingSpace + " m²");
squareMeterSpan.appendChild(squareMeterNode);
squareMeterSpan.classList.add("squareMeter");

var costPerSquareMeterSpan = document.createElement("span");
var costPerSquareMeterNode = document.createTextNode(costPerSquareMeter.toFixed(2) + " €/m²");
costPerSquareMeterSpan.appendChild(costPerSquareMeterNode);
costPerSquareMeterSpan.classList.add("costPerSquareMeter");

var kiloWattHoursPerSquareMeterPerYearSpan = document.createElement("span");
var kiloWattHoursPerSquareMeterPerYearNode = document.createTextNode(kiloWattHoursPerSquareMeterPerYear.toFixed(2) + " kWh/m²/Jahr");
kiloWattHoursPerSquareMeterPerYearSpan.appendChild(kiloWattHoursPerSquareMeterPerYearNode);
kiloWattHoursPerSquareMeterPerYearSpan.classList.add("hwb");

var heatingCostPerMonthSpan = document.createElement("span");
var heatingCostPerMonthNode = document.createTextNode(heatingCostPerMonth.toFixed(2) + "€ Heizung Monat");
heatingCostPerMonthSpan.appendChild(heatingCostPerMonthNode);
heatingCostPerMonthSpan.classList.add("heatingCostPerMonth");

var heatingCostPerYearSpan = document.createElement("span");
var heatingCostPerYearNode = document.createTextNode(heatingCostPerYear.toFixed(2) + "€ Heizung Jahr");
heatingCostPerYearSpan.appendChild(heatingCostPerYearNode);
heatingCostPerYearSpan.classList.add("heatingCostPerYear");

var totalRentWithHeatingPerMonthSpan = document.createElement("span");
var totalRentWithHeatingPerMonthNode = document.createTextNode(totalRentWithHeatingPerMonth.toFixed(2) + "€ Warmmiete ");
totalRentWithHeatingPerMonthSpan.appendChild(totalRentWithHeatingPerMonthNode);
totalRentWithHeatingPerMonthSpan.classList.add("totalRentWithHeatingCostPerMonth");

// Insert new nodes
parentTotalRent.appendChild(flatRoomsSpan);
parentTotalRent.appendChild(squareMeterSpan);
parentTotalRent.appendChild(costPerSquareMeterSpan);
parentTotalRent.appendChild(kiloWattHoursPerSquareMeterPerYearSpan);
parentTotalRent.appendChild(heatingCostPerYearSpan);
parentTotalRent.appendChild(heatingCostPerMonthSpan);
parentTotalRent.appendChild(totalRentWithHeatingPerMonthSpan);
