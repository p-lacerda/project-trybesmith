export interface User {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface UserID extends User {
  id: number,
}