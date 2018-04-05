import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

import { OrganizationService } from './organization.service';
import { CompetitorOrganization } from '../models/organization.model';

@Injectable()
export class XlsxService {

  constructor(private orgService: OrganizationService) { }

  uploadFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      const data = (XLSX.utils.sheet_to_json(ws, {header: 1}));
      data.forEach((row, idx) => {
        if (idx === 0) {
          return;
        }
        const orgObj = new CompetitorOrganization(row[0].trim(), row[1].trim(), Number(row[2].trim()), Number(row[3].trim()),
          Number(row[5].trim()), Number(row[9].trim()), Number(row[10].trim()), Number(row[11].trim()), Number(row[6].trim()),
          Number(row[8].trim()));
        this.orgService.insertCompetitorOrganization(orgObj);
      });
    };
    reader.readAsBinaryString(file);
  }
}
