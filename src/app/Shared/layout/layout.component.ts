import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isNavbarCollapsed = false;
  items = [
    {
      name: 'LusDen',
      description: 'magna aliqua. Ut',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      image: 'assets/images/client1.jpg'
    },
    {
      name: 'Zen Court',
      description: 'magna aliqua. Ut',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      image: 'assets/images/client2.jpg'
    },
  ];

  customOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<span class="custom-nav-button prev">&lt;</span>', '<span class="custom-nav-button next">&gt;</span>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }
  constructor(private router: Router,private dialog: MatDialog) {}


  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  Login(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width: '50%',
      height: '70%',
    })
    dialogRef.afterClosed().subscribe(result => {
    })
  }
}
