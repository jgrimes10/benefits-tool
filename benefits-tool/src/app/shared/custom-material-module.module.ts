import {
  MatButtonModule,
  MatSidenavModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatToolbarModule,
  MatSliderModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatExpansionModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatSliderModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatSliderModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ]
})
export class CustomMaterialModule { }
