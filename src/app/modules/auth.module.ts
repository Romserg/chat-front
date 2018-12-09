import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AuthTabsComponent, LoginComponent, SignupComponent],
  imports: [SharedModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [AuthTabsComponent, LoginComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthModule { }
