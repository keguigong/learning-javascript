function Vehicle() {
  this.name = "vehicle"
  this.fly = function () {
    console.log('fly', this)
  }
  this.run = () => {
    console.log('run', this)
  }
}

Vehicle.prototype.jump = function() {
  console.log('jump', this.prototype)
}

Vehicle.prototype.duck = () => {
  console.log('duck', this )
}

const vehicle = new Vehicle()
vehicle.fly()
vehicle.run()
vehicle.jump()
vehicle.duck()