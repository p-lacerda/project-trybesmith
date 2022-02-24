import { RowDataPacket } from 'mysql2';

export interface Login {
  username: string,
  password: string,
}

export interface ILogin extends RowDataPacket {
  username: string,
  id: number,
}