import { Perfil } from "src/perfil/entities/perfil.entity";
import { Jogo } from "src/jogos/entities/jogo.entity";

export class Favorito {
  id?:string;
  profile?:Perfil;
  jogo?:Jogo[];
  createdAt?: Date;
  updatedAt?: Date;

}

/*ser algo como :

import { User } from "src/user/entities/user.entity";
import { Table } from "src/table/entities/table.entities";
import { Product } from "src/product/entities/product.entity";

export class Order {
  id?: string;
  user?: User;
  table?: Table;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}

*/
