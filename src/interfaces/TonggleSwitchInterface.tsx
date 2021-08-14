export interface TonggleSwitch {
  isOn: boolean;
  onChange: ( value: boolean ) => void;
}