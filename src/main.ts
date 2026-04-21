import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
providers: [
    provideHttpClient(), provideAnimationsAsync(),
  ],
  // ngZoneEventCoalescing: true

})
  .catch(err => console.error(err));
  
