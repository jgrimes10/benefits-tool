export class ReliasBenefits {

  constructor(_401k, bonus, dental, HSA, medical, pto, tuition, vision) {
    this._401k = _401k;
    this.bonus = bonus;
    this.dental = dental;
    this.HSA = HSA;
    this.medical = medical;
    this.pto = pto;
    this.tuition = tuition;
    this.vision = vision;
  }

  _401k: number;
  bonus: number;
  dental: number;
  HSA: number;
  medical: number;
  pto: number;
  tuition: number;
  vision: number;
}
