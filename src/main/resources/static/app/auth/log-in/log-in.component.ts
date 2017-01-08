import {Component} from "@angular/core";
import {Router} from '@angular/router';
import {LoginService} from "../log-in.service";
// import {LoginService} from "../log-in.service";

@Component({
  moduleId: module.id,
    selector: 'log-in',
    templateUrl: 'log-in.component.html',
    // directives: [ROUTER_DIRECTIVES]
  providers: [LoginService],
})
export class LoginComponent {

    constructor(private router:Router, private loginService: LoginService) {
    }

    login(event : any, email : any, password : any) {
        event.preventDefault();
        this.loginService.login(email, password)
            .subscribe(() => {
                this.router.navigate(['/add']);
            }, this.handleError);
    }

    logout():void {
        localStorage.removeItem('jwt');
    }


    handleError(error : any) {
        console.log(error.status);
    }

}
