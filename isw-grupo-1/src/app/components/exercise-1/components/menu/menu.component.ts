import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exerice-one-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirectBusinessAdress() {
    this.router.navigate([ 'delivereat/local' ]);
  }

  redirectCustomerAdress() {
    this.router.navigate([ 'delivereat/domicilio' ]);
  }

  redirectPayment() {
    this.router.navigate([ 'delivereat/pago' ]);
  }

  redirectProductData() {
    this.router.navigate([ 'delivereat/producto' ]);
  }

}
