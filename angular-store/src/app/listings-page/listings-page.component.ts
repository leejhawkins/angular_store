import { Component, OnInit } from '@angular/core';
import { Item } from '../types';
import { fakeListings } from '../fake-data'

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }
  buyProduct(id: number): void {
    const listings = this.listings
    const listing  = this.listings.find(listing => listing.id === id)
    listing.quantity = listing.quantity -1 
    this.listings = listings

    

  }
  
}
