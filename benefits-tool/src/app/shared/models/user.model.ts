export class User {

  constructor(email, isAdmin) {
    this.isAdmin = isAdmin;
    this.email = email;
  }

  $key: string;
  isAdmin: boolean;
  email: string;
  firstName: string;
  lastName: string;
  position: string;
  salary: number;
  bonus: number;
  _401k: number;
  medical: number;
  dental: number;
  hsa: number;
  pto: number;
  tuition: number;
}
