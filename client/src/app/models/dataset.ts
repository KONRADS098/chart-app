import {Datapoint} from "./datapoint";

export class Dataset {
  label: string;
  data: Datapoint[]

  constructor(name: string, data: Datapoint[]) {
    this.label = name;
    this.data = data;
  }

}
