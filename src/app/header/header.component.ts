import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  productForm : any;
  constructor( private proServe : ProductService){}
  ngOnInit(): void {
    this.productForm = new FormGroup({
      proImg : new FormControl('', Validators.required),
      proName : new FormControl('', Validators.required),
      proPrice : new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    let pro = this.productForm.value;
    let productObj = new Product(pro.proImg,pro.proName,pro.proPrice,pro.number,pro.quantityaddprice)
    console.log(pro);
    this.proServe.addNewProduct(productObj)
    this.productForm.reset();
  }


}
