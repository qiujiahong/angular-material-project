import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatMenuModule, 
  MatIconModule, 
  MatCardModule,
  MatTableModule,
  MatTabsModule, 
  MatSidenavModule,
  MatListModule,
  MatToolbarModule
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
    MatTabsModule, 
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
})

export class MaterialModule{
}
