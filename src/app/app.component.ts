import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth, Storage } from 'aws-amplify';
import {APIService} from './API.service';
import { ConsoleLogger } from '@aws-amplify/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  signedIn: boolean;
  user: any;
  s3Result: string;
  todo:any;
  message:string;
  constructor( private amplifyService: AmplifyService ,
               private api:APIService) {
      this.amplifyService.authStateChange$
          .subscribe(authState => {
              this.signedIn = authState.state === 'signedIn';
              if (!authState.user) {
                  this.user = null;
              } else {
                  this.user = authState.user;
              }
      });
      Storage.put('test.png','Hello')
      .then(result=>this.s3Result=result.toString())
      .catch(err=>this.s3Result=err.toString());

    /*   api.CreateTodo( {name:'test',description:'test'}).then(r=>this.todo=r)
                                                       .catch(err=>{
                                                          console.log(err);
                                                          this.message=err.toString();}); */

  }
}
