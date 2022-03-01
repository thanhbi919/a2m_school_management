import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>import("./account-list/account-list.module").then(m=>m.AccountListModule)
  },
  {
    path: "create",
    loadChildren: () => import("./create-account/create-account.module").then(m=>m.CreateAccountModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
