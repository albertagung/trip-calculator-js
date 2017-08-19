function startJs () {
  //The input
  document.getElementById("yourInput").innerHTML = ("Your Input");

  //Vehicle details input
  var vehicleTankCapacity = prompt("Insert your vehicle tank capacity (only number)");
  document.getElementById("IDvehicleTankCapacity").innerHTML = ("Your vehicle tank capacity is: " + vehicleTankCapacity + " liter");
  var vehicleKpl = prompt("Insert your vehicle kilometers per liter rate (only number)");
  document.getElementById("IDvehicleKpl").innerHTML = ("Your vehicle kilometers per liter rate is: " + vehicleKpl) + " kilometers per liter";
  var vehicleServiceDistance = prompt("Insert your vehicle max distance (in KM) before service");
  document.getElementById("IDvehicleServiceDistance").innerHTML = ("Your vehicle max distance before service is: " + vehicleServiceDistance + " kilometers");

  //Service and fuel cost input
  var fuelCpl = prompt("Insert your vehicle fuel cost per liter (number only)");
  document.getElementById("IDfuelCpl").innerHTML = ("Your fuel cost per liter is: IDR " + fuelCpl);
  var serviceCpc = prompt("Insert your car maintenance cost (number only)");
  document.getElementById("IDserviceCpc").innerHTML = ("Your vehicle maintenance cost is: IDR " + serviceCpc);

  //Trip details input
  var distance = prompt("Insert your trip distances (can be multiple distance, seperate each distance with commas)");
  var distanceSplit = distance.split(",");
  var v;
  var distanceTraveled = 0;
  function totalDistanceTraveled () {
    for(var i = 0; i < distanceSplit.length; i++) {
      v = parseInt(distanceSplit[i]);
      distanceTraveled += v;
    }
  }
  totalDistanceTraveled();
  var tripType = prompt("Insert your trip type RETURN or ONE WAY (only use CAPITAL LETTER)");
  document.getElementById("IDtripType").innerHTML = ("Your trip type is: " + tripType + " trip");

  //The results
  document.getElementById("theResults").innerHTML = ("The Results");

  //Fuel Calculation
  function twoWay () {
    if(tripType === "RETURN") {
      return distanceTraveled * 2
    }
    else if(tripType === "ONE WAY") {
      return distanceTraveled * 1
    }
  }
  var distanceTraveled = (twoWay());
  console.log("Your total distance is: " + distanceTraveled);
  document.getElementById("IDdistanceTraveled").innerHTML = ("Your distance traveled for this trip is: " + distanceTraveled + " kilometers in " + tripType + " trip");
  function fuelNeeded () {
     return Math.round(distanceTraveled / vehicleKpl);
  }
  var fuelNeededResult = (fuelNeeded());
  console.log("You need " + fuelNeededResult + " liter for this trip");
  document.getElementById("IDfuelNeededResult").innerHTML = ("You need " + fuelNeededResult + " liter for this trip");
  function refuelNeeded () {
     return Math.round(fuelNeededResult / vehicleTankCapacity);
  }
  var refuelNeededResult = (refuelNeeded());
  console.log("You need to refuel " + refuelNeededResult + " times for this trip");
  document.getElementById("IDrefuelNeededResult").innerHTML = ("You need to refuel " + refuelNeededResult + " times for this trip");
  function refuelCost () {
    return Math.round(fuelNeededResult * fuelCpl);
  }
  var refuelCostResult = (refuelCost());
  console.log("Your refuel cost for this trip is IDR " + refuelCostResult);
  document.getElementById("IDrefuelCostResult").innerHTML = ("Your refuel cost for this trip is IDR " + refuelCostResult);
  function fillTank () {
     return Math.round((vehicleTankCapacity - 5) * vehicleKpl);
  }
  var fillTankResult = (fillTank());
  console.log("Please fill up your tank after " + fillTankResult + " Kilometers");
  document.getElementById("IDfillTankResult").innerHTML = ("Don't forget to fill up your tank after " + fillTankResult + " Kilometers");

  //Service calculation
  function servicePerTrip () {
     return distanceTraveled / vehicleServiceDistance;
  }
  var servicePerTripResult = (servicePerTrip());
  function serviceCpt () {
    return Math.round(servicePerTripResult * serviceCpc);
  }
  var serviceCpcReturn = (serviceCpt());
  console.log("Service cost you've spent on this trip is IDR " + serviceCpcReturn);
  document.getElementById("IDserviceCpcReturn").innerHTML = ("Service cost you've spent on this trip is IDR " + serviceCpcReturn);

  //Odometer calculation
  function odometer () {
    return distanceTraveled;
  }
  var odometerResult = (odometer());
  console.log("Your vehicle odometer will be added " + odometerResult + " KM on this trip");
  document.getElementById("IDodometerResult").innerHTML = ("Your vehicle odometer will be added " + odometerResult + " KM on this trip")
  document.getElementById("startAgain").innerHTML = ('Click the "Start Now!" button to try again');
}
