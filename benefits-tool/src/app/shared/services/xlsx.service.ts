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
      console.log(data[1]);
      const firstRow = data[1];

      const pushTest = new CompetitorOrganization(firstRow[0].trim(), firstRow[1].trim(), Number(firstRow[2].trim()),
        Number(firstRow[3].trim()), Number(firstRow[5].trim()), Number(firstRow[9].trim()), Number(firstRow[10].trim()),
        Number(firstRow[11].trim()), Number(firstRow[6].trim()), Number(firstRow[8].trim()));
      this.orgService.insertCompetitorOrganization(pushTest);
    };
    reader.readAsBinaryString(file);
  }
}
