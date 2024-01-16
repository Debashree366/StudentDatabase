
import {Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../shared/user-service.service';

export interface PeriodicElement {
  // firstname: string;
  // id: number;
  // lastname: number;
  // email: string;
  name: string;
  email: string;
  city: string;
  phone: string;
  website: string;
  companyname: string;
}

 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['name', 'email', 'city', 'phone', 'website', 'companyname', 'edit', 'delete'];
  data;
  
  dataSource: any;
  

  constructor(
    public api: UserServiceService,
  ) { }

  ngOnInit() {
    
 
    this.api.getAllUsers().subscribe(response => {
      this.data = response;
      // console.log(response);
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);
      // console.log(this.dataSource, 'test');
    })

  }
 

}
