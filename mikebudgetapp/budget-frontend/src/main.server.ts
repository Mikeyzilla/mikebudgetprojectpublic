import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';  // <- use the correct config here

const bootstrap = () => bootstrapApplication(App, appConfig);

export default bootstrap;
