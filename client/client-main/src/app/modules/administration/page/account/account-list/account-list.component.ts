import { Component, Inject, OnInit } from '@angular/core';
import { AccountService } from '../../../../../service/account/account.service';
import { Account } from '../../../../../model/account';
import { HttpErrorResponse } from '@angular/common/http';
import { TeacherService } from '../../../../../service/teacher/teacher.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accountList :Account[] =[];
  account !:Account;
  password:string = "123"
  listUsername :string[] = [];
  acc !:Account;
  //trang hiện tại
  pageCur: number = 0;
  //tổng số trang của kết quả tìm kiếm
  searchPageCur : number = 0;
  //tổng số trang
  totalPage:number = 0 ;
  //tổng số tài khoản
  totalAccount: number =0;
  //số kết quả muốn hiển thị
  pageSize:number = 5;
  stateEdit=10000000000000;
  stateSearch =0;
  stateSave = 1;
  listState =[0,1]
  count =0;
  i = 0
  searchUser: string ='' ;
  searchRole: string = '';
  /* mảng editList gồm 2 phần tử
    nếu index hiện tại là 0 phần tử tiếp theo sẽ được lưu vào editList[1]
    nếu index hiện tại là 1 phần tử tiếp theo sẽ được lưu vào editList[0]
*/
  editList : Edit[] = [{
    id:0,
    index:0
  },
  {
    id:0,
    index:0
  }
];

  constructor(
    private accountService : AccountService,
   ) {  }

  ngOnInit(): void {
    this.stateSearch = 0;
    this.accountService.getAllAccount(this.pageCur,this.pageSize).subscribe(
      (response)=>{
        this.accountList =response['content'];
        this.totalPage = response['totalPages'];
        this.totalAccount= response['totalElements'];
    }
  )
  }
  //mặc định
  onPageChange(event:PageEvent){
    let indexStart:number;
    this.pageCur= event.pageIndex;
    this.pageSize= event.pageSize;
    this.editList = [
      {id: 0,index: 0},
      {id:0,index:0}]
    if(this.stateEdit != 10000000000000){
      if(confirm("Bạn có muốn lưu thay đổi1")){
        this.saveAll();
      }else{}
      this.stateEdit=10000000000000;
      this.count=0;
    }
    if(this.stateSearch==1){
      this.printList();}
    else this.ngOnInit();
  }
  //tim tài khoản theo username hoặc roles hoặc cả hai
  search(){
      this.pageCur=0;
      this.stateSearch =1;
      this.accountService.findAccountByUsernameAndRole(this.searchUser.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),this.searchRole,this.pageCur,this.pageSize).subscribe(
      (response)=>{
          this.accountList= response['content'];
          this.totalPage=response['totalPages'];
          this.totalAccount=response['totalElements']
        }
      )
    }
  delete(id:number){
    if(confirm("Bạn có chắc chắn muốn xóa không?")){
      this.accountService.deleteAccount(id).subscribe(
        response=>{
         const index= this.accountList.findIndex(e =>e.id ===id);
         this.accountList.splice(index,1);
         this.ngOnInit();
        }
      )
    }else {}
  }
  save(index : number, id :number){
    if(this.password=="123"){
      if(confirm("Mật khẩu đang là mặc định 123 bạn có muốn lưu")){

      }else {return}
    }
    this.accountList[index].password=this.password;
      this.accountService.update(this.accountList[index]).subscribe(
        response =>{
          alert("Cập nhật thành công")
          this.password="123";
        },
        (error: HttpErrorResponse)=>{
            this.accountService.getAccountById(id).subscribe(
                response =>{
                        this.accountList[index]=response;
                }
            )

              alert("Cập nhật không thành công do "+error.error.message);
          }


      )
  }
  saveAll(){
   this.accountService.updateAll(this.accountList).subscribe(
     reponse=>{},
     (error :HttpErrorResponse)=>{
        if(error.status==200) alert("cập nhât thành công");
     else{
       alert(error.error.message);
     }
    }
   )

  }
  printList(){
      this.accountService.findAccountByUsernameAndRole(this.searchUser,this.searchRole,this.pageCur,this.pageSize).subscribe(
      (response)=>{
        this.accountList= response['content'];
        this.totalPage=response['totalPages'];
        this.totalAccount=response['totalElements'];
      }
    )
  }
  getAccounts(){
    this.accountService.getAllAccount(this.pageCur,this.pageSize).subscribe(
      (response)=>{
        this.accountList =response['content'];
      }
    )
  }

/*
  param id là id tương ứng của Account
  param index là chỉ số của Account trong bảo được show ở client
*/
  edit(id:number,index:number){
    // const y = document.getElementById('button_delete');
    // if(y) y.style.display ='none'
    // nếu i=2 thì gắn i = 0  để phần tử được lưu vào aditList[0]
    if(this.i>2) this.i=0;
    this.editList[this.i]={
      id:10,
      index:10
    }
    this.editList[this.i].id=id;
    this.editList[this.i].index =index;


    //nếu tên của button đang là edit và count =0 thì đổi sang Save và count=1
    const x = document.getElementById('button_edit'+id);
    if(x?.innerText=="Sửa"&&this.count==0){
      this.stateEdit =id;
      x.innerHTML="Lưu";
      this.count=1;
      this.i++;
      return;
    }
    //trường hợp chưa ấn Save nhưng lại ấn edit ở Button khác
    if(x?.innerText=="Sửa"&&this.count==1){
        if( confirm("Bạn có muốn lưu thay đổi không"))
        {
          // chuyển stateEdit = 10000000000000 tức đã hoàn tất edit k thể chỉnh sửa được nữa
          this.stateEdit =10000000000000;
          if(this.i==0){
            // nếu i=0 thì nút chưa ấn save là nút có id =this.editList[i+1].id
            this.save(this.editList[this.i+1].index,this.editList[this.i+1].id);
          }
          else this.save(this.editList[this.i-1].index,this.editList[this.i-1].id);
        }
        else{
         if(this.i==0){
           const a =this.editList[this.i+1].index;
           this.accountService.getAccountById(this.editList[this.i+1].id).subscribe(
             response =>{
               this.accountList[a]=response;
             }
           )
         } else{
           const a =this.editList[this.i-1].index;

          this.accountService.getAccountById(this.editList[this.i-1].id).subscribe(
            response =>{
              this.accountList[a]=response;
            }
          )
         }

        }
        // nút hiện tại sẽ có trạng thái đang chỉnh sửa
      this.stateEdit =id;
      if(this.i==0){
        // debugger
        const y = document.getElementById('button_edit'+this.editList[this.i+1].id)
        if(y) y.innerHTML="Sửa";
        x.innerHTML="Lưu"
        this.i++;
      }else{
        // debugger
        const y = document.getElementById('button_edit'+this.editList[this.i-1].id)
        if(y) y.innerHTML="Sửa";
        x.innerHTML="Lưu"
        this.i--;
      }
    }
    else{
      if(x){
        this.stateEdit =10000000000000;
        this.save(index,id);
        x.innerHTML="Sửa";
        this.count=0;
      }
    }

  }

}

//dùng để lưu id và index của 2 đối tượng gần nhất được edit
export class Edit {
  constructor( public id:number ,
              public index:number  )
  {}

}


