import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-listings',
  templateUrl: './new-listings.component.html',
  styleUrls: ['./new-listings.component.css']
})
export class NewListingsComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = ''
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Creating a new listing ')
    this.router.navigateByUrl('/my-listings')
  }

}
