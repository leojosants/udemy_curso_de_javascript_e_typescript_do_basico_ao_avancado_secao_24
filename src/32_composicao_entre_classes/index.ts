/*------------------------------------------------------------------------*/
export class Car {
  private readonly _motor: Motor = new Motor;

  public get motor(): Motor {
    return this._motor;
  }

  public on(): void {
    this.motor.on()
  }

  public accelerate(): void {
    this.motor.accelerate()
  }

  public off(): void {
    this.motor.off()
  }
}

/*------------------------------------------------------------------------*/
export class Motor {
  public on(): void {
    console.log('\nLigado motor!');
  }

  public accelerate(): void {
    console.log('\nAcelerado motor!');
  }

  public off(): void {
    console.log('\nDesligado motor!');
  }
}

/*------------------------------------------------------------------------*/
const car = new Car();
car.on();
car.accelerate();
car.off();
