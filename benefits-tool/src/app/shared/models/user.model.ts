export class User {

  constructor(email?, isAdmin?, firstName?, lastName?, position?, department?, salary?, bonus?,
    _401k?, medical?, dental?, hsa?, pto?, numberOfPtoDaysTaken?, tuition?
  ) {
    this.isAdmin = isAdmin || null;
    this.email = email || null;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.position = position || null;
    this.department = department || null;
    this.salary = salary || null;
    this.bonus = bonus || null;
    this._401k = _401k || null;
    this.medical = medical || null;
    this.dental = dental || null;
    this.hsa = hsa || null;
    this.pto = pto || null;
    this.tuition = tuition || null;
  }

  $key: string;
  isAdmin: boolean;
  email: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  salary: number;
  bonus: number;
  _401k: number;
  medical: number;
  dental: number;
  hsa: number;
  pto: number;
  tuition: number;
}
