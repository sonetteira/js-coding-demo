const mercury = {
    radius: 1516, //mi
    mass: 3.285 * 10**23, //kg
    period: 88, //days
    dayLength: 58, //days
    distanceSun: 35.98, //million mi
}

console.log("How long is a day on Mercury? (dot notation)", mercury.dayLength)

let prop = "dayLength"
console.log("How long is a day on Mercury? (bracket notation)", mercury[prop])

mercury.moons = 0
console.log(mercury)

// mercury = "something new" //not allowed

// fan object
const ceilingFan = {
    blades: 5,
    numSpeeds: 3,
    currentSpeed: 2,
    pullString: function() {
        this.currentSpeed++
        if(this.currentSpeed > this.numSpeeds) {
            this.currentSpeed = 0
        }
        return this.currentSpeed
    }
}

console.log(`Change fan speed: ${ceilingFan.pullString()}`)

//slow a fan down by one speed
for(let i=0; i<ceilingFan.numSpeeds; i++) {
    ceilingFan.pullString()
}
// speed = 2, 3, 0, 1

console.log(`New fan speed: ${ceilingFan.currentSpeed}`)

//turn the fan off
while(ceilingFan.currentSpeed != 0) {
    ceilingFan.pullString()
}

console.log(`New fan speed: ${ceilingFan.speed}`)

const laptop = {
    serialNum: 123456789,
    os: "Win 10",
    name: "my-laptop",
    manufacturer: "Dell",
    model: "Precision 5550",
    processor: "Intel Core i7",
    ram: 32.0, //GB
    hyperVEnabled: true,
    timeZone: "EST",
    cDrive: { //a drive object nested inside the laptop object
        serial: "C7JR938",
        size: 500, //GB
        freeSpace: 400, //GB
    },
    powerStatus: "On",
    batteryLevel: 80, //%
    pluggedIn: false,
    batteryLifeRemaining: function() {
        if(this.pluggedIn) {
            return "∞"
        }
        /*
            10 minutes for every 1% of the battery
            This is not how batteries really work, but oh well
        */
        let mins = this.batteryLevel * 10
        return mins
    },
    pressPowerButton: function() {
        if(this.powerStatus == "On") {
            this.powerStatus = "Off"
        } else {
            this.powerStatus = "On"
        }
    },

}

console.log(`${laptop.name} has ${laptop.batteryLifeRemaining()} battery left.`)

if(laptop.powerStatus == "On") {
    //Do something here
    if(laptop.pluggedIn || laptop.batteryLifeRemaining > 50) {
        //run a energy intensive process
    } 
}