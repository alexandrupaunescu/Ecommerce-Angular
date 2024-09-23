import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  currentCategoryId: number = 1;


  products: Product[] = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    });
  }

  listProducts(){

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    
    if(hasCategoryId){
      // get the "id" param string. convert strinmg to a number the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else{
      // no category id is availible set it to 1
      this.currentCategoryId =1;
    }

    // now get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data =>{
        this.products = data;
      }
    )
  }

}
