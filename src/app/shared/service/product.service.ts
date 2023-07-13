import { BehaviorSubject, Subject } from "rxjs";
import { Product } from "../model/product.model";

export class ProductService{
    productDataList : Product[] | any = [new Product("https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/47336/e-class-exterior-left-front-three-quarter.jpeg?q=75","Mercedes-Benz",100000,5,500000)]

    productSub = new BehaviorSubject(this.productDataList.slice());
    
    getProductList(){
        return this.productDataList.slice()
    }

    addNewProduct(newProduct : any){
        this.productDataList.push(newProduct);
        this.productSub.next(this.productDataList.slice())
        console.log(this.productDataList)

    }
}




