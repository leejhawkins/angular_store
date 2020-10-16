import { Component, OnInit, Input, Output } from '@angular/core';
import { Department, Item } from '../types';
import { ListingsService} from "../listings.service"

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Item[] = [];
  departments: Department[] = []
  currentDepartment: string = '';

  constructor(
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    this.listingsService.getItems()
      .subscribe(listings => this.listings = listings)
    this.listingsService.getDepartments()
      .subscribe(departments => this.departments = departments)
  }
  buyProduct(id): void {
    let updatedListing = this.listings.find(listing => listing.item_id === id)
    this.listingsService.buyProduct(id)
      .subscribe(listing=> {
        updatedListing.stock_quantity = listing.stock_quantity
      })
    
  }
  setDepartment(name): void {
    this.currentDepartment = name
  }


  
}
