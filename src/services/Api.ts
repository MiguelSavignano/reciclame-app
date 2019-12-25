import wasteTypes from '../data/tipos_residuos.json';

export interface IItem {
  name: string;
  type: string;
  group: string;
}

export default class Api {
  static wasteTypes(): IItem[] {
    return wasteTypes;
  }
}
