import { Component } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/service/product.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productData : Product[] = [];
  addproduct : Product[] =[];
  constructor(private proServe : ProductService){}
  ngOnInit(): void {
    this.proServe.productSub.subscribe((param : any)=>{
      this.productData = param;
      console.log(this.productData)

    })
   
  }

  add(object : any){
    this.addproduct.push(...object)
    console.log(this.addproduct);



  }

 
}
