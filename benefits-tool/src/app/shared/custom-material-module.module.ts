import { MatButtonModule, MatSidenavModule, MatTableModule, MatIconModule, MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule, MatSidenavModule, MatTableModule, MatIconModule, MatDialogModule ],
  exports: [ MatButtonModule, MatSidenavModule, MatTableModule, MatIconModule, MatDialogModule ],
})
export class CustomMaterialModule { }
