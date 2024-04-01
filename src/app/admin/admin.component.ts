import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { User } from '../Model/User';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userName: string = '';
  gender: string = '';
  subType: string = '';
  userStatus: string = '';
  users: User[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.users = this.adminService.getAllUser();
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

  addUser(){
    this.adminService.createUser(this.userName, this.gender, this.subType, this.userStatus);
    this.userName = '';
    this.gender = '';
    this.subType = '';
    this.userStatus = '';
    this.users = this.adminService.getAllUser(); // Update the users array
    this.dataSource = new MatTableDataSource<User>(this.users); // Reassign MatTableDataSource with updated users array
  }

  // Table
  // Define columns to be displayed in the table
  displayedColumns: string[] = ['name', 'gender', 'subType', 'userStatus'];

  // Define data source for the table
  dataSource: MatTableDataSource<User>;
}
