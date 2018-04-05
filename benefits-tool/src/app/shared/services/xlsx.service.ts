import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable()
export class XlsxService {

  constructor() { }

  uploadFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });

      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      const data = (XLSX.utils.sheet_to_json(ws, {header: 1}));
      console.log(data);
    };
    reader.readAsBinaryString(file);
  }
}
