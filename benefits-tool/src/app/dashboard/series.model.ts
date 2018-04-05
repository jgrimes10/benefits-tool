export class SeriesModel {
  key: string;
  color: string;
  values: Array< {label: string, value: number}>;
  constructor() {
      this.values = new Array();
  }
}
