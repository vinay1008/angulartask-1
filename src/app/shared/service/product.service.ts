import { BehaviorSubject, Subject } from "rxjs";
import { Product } from "../model/product.model";

export class ProductService{
    productDataList : Product[] | any = [new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EsPOuMRA49A6rUzE1xBia7GSS4Ys9NWqsA&usqp=CAU","Black Forest Cake",350,5,350)]

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