export type { Configuration, State };

interface State {
  view: string;
  timerActive: boolean;
  seconds: number;
}

interface Configuration {
  showName: string;
  intermissionLength: number;
  primaryColor: string;
  gradientColor: string;
  secondaryColor: string;
  splash: string;
}

export const getDefaultState = (): State => ({
  view: "splash",
  timerActive: false,
  seconds: 0,
});

export const getDefaultConfiguration = (): Configuration => ({
  showName: "UNTITLED",
  intermissionLength: 15,
  primaryColor: "black",
  gradientColor: "black",
  secondaryColor: "black",
  splash: "THE SHOW WILL BEGIN SHORTLY",
});
