var deviceName = document.getElementById("device-name");
deviceName.innerHTML = "Device: " + navigator.platform;
var batPercentage = document.getElementById("battery-percentage");
navigator.getBattery().then(function (battery) {
    var batLevel = Math.floor(battery.level * 100);
    batPercentage.innerHTML = "Battery Level: " + (batLevel + "%");
    var batteryLevelColor = document.getElementById("battery-color");
    if (batLevel == 100) {
        batteryLevelColor.className = "battery full";
    } else if (batLevel > 70) {
        batteryLevelColor.className = "battery high";
    } else if (batLevel >= 25) {
        batteryLevelColor.style.width = batLevel;
        batteryLevelColor.className = "battery medium";
    } else {
        batteryLevelColor.className = "battery low";
    }
})