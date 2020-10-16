import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ListingsService}  from '../listings.service'
import {Item } from '../types'

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing: Item;
  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getItemById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.isLoading = false
      })
    
  }

}
