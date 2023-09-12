import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessAdress, CustomerAdress, Payment, ProductData } from '../../models';

@Component({
  selector: 'exerice-one-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {
  }

  @Input() productData: ProductData;
  @Input() customerAdress: CustomerAdress;
  @Input() businessAdress: BusinessAdress;
  @Input() payment: Payment;

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

  getPaymentDescription(): string {
    if(this.payment.isCash) {
      return `Pagas en efectivo, con ${this.payment.cash.cashAmount}`;
    } else {
      return `Pagas con tu Visa terminada en ${this.payment.card.cardNumber.slice(-4)}`
    }
  }

}
