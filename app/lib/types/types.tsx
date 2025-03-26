export interface Engine {
    serialnumber: number;
    horsepower: number;
  }
  export interface Car {
    name: string;
    type: string;
    color: string;
    engine: Engine;
  }