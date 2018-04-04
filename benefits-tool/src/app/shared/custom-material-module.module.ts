import { MatButtonModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule, MatSidenavModule, MatTableModule ],
  exports: [ MatButtonModule, MatSidenavModule, MatTableModule ],
})
export class CustomMaterialModule { }
