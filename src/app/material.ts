import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatMenuModule, 
  MatIconModule, 
  MatCardModule,
  MatTableModule,
  MatTabsModule 
} from '@angular/material';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule
  ],
})

export class MaterialModule{
}
