import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _model = new User();

  constructor(private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this._model.password != "1234567890" && this._model.email != "admin")
    {
      this.toastrService.error("Invalid username or password", "", {positionClass:"toast-top-right"});
      
    }
    else
    {
      this.router.navigate(['/home']);
    }
    

  }
}
