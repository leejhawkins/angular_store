import { Component, OnInit } from '@angular/core';
import { Transaction } from '../types'
import { ListingsService } from "../listings.service"

@Component({
  selector: 'app-user-transaction-page',
  templateUrl: './user-transaction-page.component.html',
  styleUrls: ['./user-transaction-page.component.css']
})
export class UserTransactionPageComponent implements OnInit {
  transactions: Transaction[] = []
  constructor(
    private listingsService: ListingsService
  ) { }
  
  ngOnInit(): void {
    this.listingsService.getTransactionsByUser()
      .subscribe(transactions => this.transactions =  transactions)
  }

}
