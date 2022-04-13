

export interface Buttons{
    a: number;
    b: boolean;
    c: boolean;
    x: boolean;
    y: boolean;
    z: boolean;
}

export interface RobotState {
  // Units: Ticks
  motorSpeeds: [number, number, number, number];
  motorPositions: [number, number, number, number];
  servoPositions: [number, number, number, number];
  
  analogValues: RobotState.AnalogValues;
  digitalValues: RobotState.DigitalValues;

  buttons: Buttons;

}

export namespace RobotState {
  export const empty: RobotState = {
    motorSpeeds: [0, 0, 0, 0],
    motorPositions: [0, 0, 0, 0],
    servoPositions: [1024, 1024, 1024, 2047],
    analogValues: [0, 0, 0, 0, 0, 0],
    digitalValues: [false, false, false, false, false, false],
    buttons: {a:0,b:false,c:false,x:false,y:false,z:false}

  };

  
  export type Values<T> = [T, T, T, T, T, T];
  export type DigitalValues = Values<boolean>;
  export type AnalogValues = Values<number>;
}
