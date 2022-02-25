export interface Products {
  products: number[]
}

export interface IProducts {
  order: {
    userId: number,
    products: number[],
  },
}