export class AllOrdersModel {
  orders: {
    address: string,
    animator: {
      id: number,
      name: string
    },
    createdAt: string,
    date: string,
    event: string,
    id: number,
    status: string,
    user: {
      name: string,
      phone: string
    }
  }[];
}
