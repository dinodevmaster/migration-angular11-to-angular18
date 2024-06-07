import { importProvidersFrom } from "@angular/core";
import { ApplicationConfig } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AnimeInterceptor } from "./commons/interceptors/animes-interceptor";
import { provideRouter } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { provideAnimations } from "@angular/platform-browser/animations";

export const CONFIG: ApplicationConfig = {
    providers: [
        provideRouter(APP_ROUTES),
        provideAnimations(),
        importProvidersFrom(
            HttpClientModule,
            MatSnackBarModule
        ),
        {
			provide: HTTP_INTERCEPTORS,
			useClass: AnimeInterceptor,
			multi: true
		}
    ]
};
