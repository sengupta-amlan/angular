import { Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverCreated = false;
  serverName = '';
  serverCreation = 'No new server was created';
  allowServer = false;

  constructor(){
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  onCreate(){
    this.serverCreated = true;
    this.serverCreation = 'Server is created,name is ' + this.serverName;
  }

  updateName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
