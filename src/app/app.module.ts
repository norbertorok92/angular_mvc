import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// componenets
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestService } from './rest.service';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    PostsComponent,
    EventsComponent,
    AddPostsComponent,
    EditPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
