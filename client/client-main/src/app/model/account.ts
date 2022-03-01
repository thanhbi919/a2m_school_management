import { Teacher } from './teacher';
import { Role } from './role';
export class Account{
  constructor(
    public id:number,
    public username:string,
    public password:string,
    public status:number,
    public listRole:Role[],
    public teacherId: number
  ){}
}
