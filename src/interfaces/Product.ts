import { RowDataPacket } from 'mysql2';

export interface Product {
  name: string,
  amount: string
}

export interface IProduct {
  item: {
    id: number,
    name: string,
    amount: string
  }
}

export interface AllProducts extends RowDataPacket {
  id: number,
  name: string,
  amount: string,
  orderId: number,
}