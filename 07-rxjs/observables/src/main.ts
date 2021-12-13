import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/04-asyncpipe_services/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
