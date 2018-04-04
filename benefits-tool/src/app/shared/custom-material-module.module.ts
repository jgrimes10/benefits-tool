import { MatButtonModule, MatSidenavModule, MatTableModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule, MatSidenavModule, MatTableModule, MatIconModule ],
  exports: [ MatButtonModule, MatSidenavModule, MatTableModule, MatIconModule ],
})
export class CustomMaterialModule { }
