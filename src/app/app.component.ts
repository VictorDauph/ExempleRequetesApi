import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpTestServiceService } from './http-test-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private httpTestService: HttpTestServiceService) { }

  ngOnInit() {
    let authBody = { "username": "admin", "password": "pwd" }

    this.httpTestService.login(authBody).subscribe(value => {
      console.log(value)
      localStorage.setItem("token", value.token)

      this.httpTestService.getUsers().subscribe(value => {
        console.log(value)
      })
    });
  }

}
