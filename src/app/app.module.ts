import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FileTreeComponent } from './file-tree/file-tree.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { RecipientListComponent } from './recipient-list/recipient-list.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './login/HttpInterceptorService';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserDashboardComponent,
    FileViewerComponent,
    PdfViewerModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    FileTreeComponent,
    SearchComponent,
    RecipientListComponent,
    MenuComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
