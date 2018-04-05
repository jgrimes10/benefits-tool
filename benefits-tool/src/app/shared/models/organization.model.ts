export class CompetitorOrganization {

  constructor(name, position, avgSalary?, avgBonus?, avg401k?, avgMedical?, avgDental?, avgVision?, avgTuition?, avgPTO?) {
    this.name = name;
    this.position = position;
    this.avgSalary = avgSalary || 0;
    this.avgBonus = avgBonus || 0;
    this.avg401k = avg401k || 0;
    this.avgMedical = avgMedical || 0;
    this.avgDental = avgDental || 0;
    this.avgVision = avgVision || 0;
    this.avgTuition = avgTuition || 0;
    this.avgPTO = avgPTO || 0;
  }

  $key: string;
  name: string;
  position: string;
  avgSalary: number;
  avgBonus: number;
  avg401k: number;
  avgMedical: number;
  avgDental: number;
  avgVision: number;
  avgTuition: number;
  avgPTO: number;
}
