import { Component, OnInit } from '@angular/core';
import { User } from '../types'
import { ListingsService } from '../listings.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    this.listingsService.getUser()
      .subscribe(user => {
        this.listingsService.user = user;
      })
  }

  get user(): User {
    return this.listingsService.user
  }



}
