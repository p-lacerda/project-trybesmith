import { RowDataPacket } from 'mysql2';

export interface Products {
  products: number[]
}

export interface IProducts {
  order: {
    userId: number,
    products: number[],
  },
}

export interface AllOrders {
  id: number,
  userId: number,
  products: number[]
}

export interface Orders extends RowDataPacket {
  id: number,
  userId: number,
}