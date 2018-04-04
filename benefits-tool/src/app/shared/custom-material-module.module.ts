import { MatButtonModule, MatSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatButtonModule, MatSidenavModule ],
  exports: [ MatButtonModule, MatSidenavModule ],
})
export class CustomMaterialModule { }
