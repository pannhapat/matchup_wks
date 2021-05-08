import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   postId;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
        this.postId = data.id;
    });
    // this.http.post<any>('https://reqres.in/api/posts', { 
    //   title: 'Angular POST Request Example' }).subscribe(data => {
    //         this.postId = data.id;
    // })
}
}
