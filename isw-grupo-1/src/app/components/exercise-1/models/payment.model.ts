export class Payment {
  isCash: boolean;
  cash?: CashPaymentType;
  card?: CardPaymentType;
}

export class CashPaymentType {
  cashAmount: number;
}

export class CardPaymentType {
  cardNumber: string;
  fullName: string;
  expiration: string;
  securityCode: number;
}