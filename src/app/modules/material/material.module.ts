import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatDividerModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatOptionModule,
} from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatTableModule,
  MatDividerModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatOptionModule,
  MatAutocompleteModule
];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
