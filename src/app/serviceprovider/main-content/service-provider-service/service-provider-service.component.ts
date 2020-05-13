import { Component, OnInit } from '@angular/core';
import { RaydService } from 'src/app/rayd.service';
import { FormGroup, FormControl, FormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { OrderDetails } from 'src/app/order-details';

@Component({
  selector: 'app-service-provider-service',
  templateUrl: './service-provider-service.component.html',
  styleUrls: ['./service-provider-service.component.css']
})
export class ServiceProviderServiceComponent implements OnInit {
  public statusForm:FormGroup;
  public productList:FormArray;
 

  constructor(private raydService:RaydService,private fb: FormBuilder) { }

servicesRequest;
 async ngOnInit() {
  this.statusForm=this.fb.group({
    status:new FormControl(''),
    // parts,
    // price,
    // quantity:,
    reviewMessage:new FormControl(''),
    serviceCharge:new FormControl(''),
    products: this.fb.array([this.createProduct()]),
    
  })
  this.productList = this.statusForm.get('products') as FormArray;


   await this.raydService.getAcctedService();
   this.servicesRequest=this.raydService.servicesProblem
  }
  service;
  visited=false;
  completed=false;
  view=false;
  async details(event){
     this.service=event;
     console.log(event[0])
     this.view=true;
     
  }
 
createProduct(): FormGroup {
  return this.fb.group({
    parts: [null, Validators.compose([Validators.required])],
    price: [null, Validators.compose([Validators.required])],
    quantity: [null, Validators.compose([Validators.required])],
  });
}
// add a contact form group
addProduct() {
  this.productList.push(this.createProduct());
}

// remove contact from group
removeProduct(index) {
  this.productList.removeAt(index);
}

get productFormGroup() {
  return this.statusForm.get('products') as FormArray;
}

// get the formgroup under contacts form array
getProductsFormGroup(index): FormGroup {
  // this.contactList = this.form.get('contacts') as FormArray;
  const formGroup = this.productList.controls[index] as FormGroup;
  return formGroup;
}

  visit(){
    
    if(this.statusForm.get('status').value=="visit"){
      this.completed=false;
    this.visited=true;
    }
    else{
      this.visited=false;
      this.completed=true;
    }
  }
  complete(){
    
    console.log("complete")
  }
    
  async saveStatus(){
    var k=0;
    console.log(this.statusForm.value);
    for(var i = 0; i < this.productList.value.length; i++) {
      console.log(this.productList.value[i].parts);
      var order=new OrderDetails();
    if(this.visited){
      this.raydService.visitingDetails.setServiceRequestId=this.service[0];
      this.raydService.visitingDetails.setVisitingMessage=this.statusForm.get('reviewMessage').value;
      
    }
    else if(this.completed){
      // this.raydService.orderDetails.setPartsName=this.statusForm.get('patsName').value;
      // this.raydService.orderDetails.setPrice=this.statusForm.get('price').value;
      // this.raydService.orderDetails.setQuantity=this.statusForm.get('quantity').value;
      // this.raydService.orderDetails.setServiceRequestId=this.service[0];
      // this.raydService.orderDetails.setServiceCharge=this.statusForm.get('serviceCharge').value;

      order.setPartsName=this.productList.value[i].parts;
      order.setPrice=this.productList.value[i].price;
      order.setQuantity=this.productList.value[i].quantity;
      order.serviceRequestId=this.service[0];;
      order.setServiceCharge=this.statusForm.get('serviceCharge').value;
     this.raydService.orderDetails[k]=order;
    }
    k++;
    
  }
  // for(var j=0;this.raydService.orderDetails.length;i++)
  console.log(this.raydService.orderDetails.length)
  if(this.visited)
  await this.raydService.saveStatus();
  else if(this.completed)
  await this.raydService.saveOrderDetails();
}
  accepted(status){
    if(status==1)
    return true;
  
  }
  completed1(status){
    if(status==2)
    return true;
  }
  visited1(status){
    if(status==3)
    return true;
  }
  async upadteStatus(){
    await this.raydService.getAcctedService();
   this.servicesRequest=this.raydService.servicesProblem;
  }
  

}
