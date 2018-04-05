export class User {

  constructor(email?, isAdmin?, firstName?, lastName?, position?, department?, salary?, medicalType?) {
    this.isAdmin = isAdmin || null;
    this.email = email || null;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.position = position || null;
    this.department = department || null;
    this.salary = salary || null;
    this.medicalType = medicalType || null;
  }

  $key: string;
  isAdmin: string;
  email: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  salary: number;
  bonus: number;
  _401k: number;
  medical: number;
  medicalType: string;
  dental: number;
  vision: number;
  hsa: number;
  pto: number;
  tuition: number;
}
