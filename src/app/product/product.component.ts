import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [
  {
    id: "1",
    name : "as1",
    price : "21"
  },  {
    id: "2",
    name : "as1",
    price : "21"
  },  {
    id: "3",
    name : "as1",
    price : "21"
  },
  ]
  form = new FormGroup({
    name :new FormControl(),
    id :new FormControl(),
    price :new FormControl()})
cre(){
    // @ts-ignore
  this.listProduct.push(this.form.value)
}
  constructor() {
  }

  ngOnInit(): void {
  }

}
