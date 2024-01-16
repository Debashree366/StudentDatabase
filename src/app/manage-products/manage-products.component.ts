import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UxproductsService } from '../shared/uxproducts.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  constructor(private _uxProducts:UxproductsService) { }
  // dataTitle = this._uxProducts.getDataTitle();
  dataTitle = "Manage products"
  fetching = false;
  @ViewChild('id') id:ElementRef;
  @ViewChild('name') name:ElementRef;
  @ViewChild('price') price:ElementRef;

  editMode:boolean = false;
  editIndex:number;

  products = [
    {
      id: 'p1',
      name:'Laptop',
      price: 45000
    },
    {
      id: 'p2',
      name:'Mobile',
      price: 8500
    },
    {
      id: 'p3',
      name:'Laptop',
      price: 45000
    },
    {
      id: 'p4',
      name:'Mobile',
      price: 8500
    },
  ]

  // onAddProduct(id, name, price){
  //   if(this.editMode){
  //     console.log(this.products[this.editIndex])
  //     this.products[this.editIndex] = {
  //       id: id.value,
  //       name:name.value,
  //       price: price.value
  //     }
  //     this.editMode = false;
  //     this.id.nativeElement.value = '';
  //     this.name.nativeElement.value = '';
  //     this.price.nativeElement.value = '';
  //   }else{
  //     this.products.push({
  //       id: id.value,
  //       name:name.value,
  //       price: price.value
  //     })
  //   }
  //   this.onSaveProduct();
  // }
  onAddProduct(id, name, price){
    
      this.products.push({
        id: id.value,
        name:name.value,
        price: price.value
      })
    }
  
  onSaveProduct(){
    this._uxProducts.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err)=> console.log(err)
    )
  }
  onFetchProduct(){
    this.fetching = true;
    this._uxProducts.fetchProducts().subscribe(
      (response) => {
        // console.log(response);
        const data = JSON.stringify(response)
        // console.log(data)
        this.products = JSON.parse(data);
        this.fetching = false;
      },
      (err)=> console.log(err)
    )
  }
  onDeleteProduct(id:number){
    if(confirm('Do you want to delete this product?')){
      this.products.splice(id,1);
      this.onSaveProduct();
    }
  }
  
  

  onEditProduct(index:number){
    this.editMode = true;
    this.editIndex = index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }

  ngOnInit() {
    this.onFetchProduct();
  }

}
