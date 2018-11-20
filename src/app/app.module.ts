import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';

import { SearchDropdownService } from './services/search-dropdown.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SearchDropdownComponent
  ],
  providers: [
    SearchDropdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
