export class SeriesModel {
  key: string;
  values: Array< {key: string, y: number}>;
  constructor() {
      this.values = new Array();
  }
}
