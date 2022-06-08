export class Usuario {
  id?:string;
  name:string;
  email:string;
  password:string;
  cpf:string;
  isAdmin?:boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
