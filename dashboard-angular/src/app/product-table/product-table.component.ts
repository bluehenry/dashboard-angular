import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @ViewChild('productAddForm') productAddForm;

  displayedColumns: string[] = ['id', 'name', 'category', 'description', 'price'];
  // dataSource = ELEMENT_DATA;

  // Add Product Form is a Reactive Form
  // Create with FormBuilder
  public addProductForm: FormGroup;

  public allProducts: IProduct[];
  public message: string;
  public errorMessage: string;
  public result = true;
  public newProduct: IProduct;
  public editProduct: IProduct;
  public showAddForm = false;
  public showEditForm = false;

  constructor( private productService: ProductService) {
  }

  ngOnInit() {
    this.newProduct = this.initializeProduct();
    // this.createAddForm();
    this.refresh();
  }

  refresh() {
    this.productService.getAllProducts()
      .subscribe(
        (data: IProduct[]) => { this.allProducts = data; },
        (err: any) => console.log(err)
      );
  }

  initializeProduct(): IProduct {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      category: null,
      description: null,
      price: null,
    };
  }

  // createAddForm() {
  //   this.addProductForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     category: ['', Validators.required],
  //     description: ['', Validators.required],
  //     price: ['', Validators.required]}
  //   );
  // }

  getProductById(id: number): IProduct {
    return this.allProducts.find(product => product.id === id);
  }

  onAdd() {
    this.message = null;
    this.errorMessage = null;
    this.newProduct = this.initializeProduct();
    this.showAddForm = true;
  }

  onCloseAdd() {
    this.showAddForm = false;
  }

  onCloseEdit() {
    this.showEditForm = false;
  }

  onEdit(id: number) {
    this.message = null;
    this.errorMessage = null;
    this.showEditForm = true;
    this.productService.getProduct(id)
    .subscribe( product => { this.editProduct = product;
                          this.result = true; },
                error => { this.errorMessage = error;
                          this.result = false; });
  }

  onDelete(id: number): void {
    this.productService.deleteProduct(id)
    .subscribe( value => { this.refresh();
                           this.result = true; },
                error => { this.errorMessage = error;
                           this.result = false; });
  }

  onSaveAdd() {
    this.productService.createProduct(this.newProduct)
      .subscribe( product => {
                        this.result = true;
                        this.message = 'The product is added successfully.'; },
                  error => { this.errorMessage = error;
                        this.result = false; });
    this.refresh();
    this.productAddForm.reset();
  }

  onSaveEdit() {
    this.productService.updateProduct(this.editProduct)
    .subscribe( product => {
                      this.result = true;
                      this.message = 'The product is updated successfully.'; },
                error => { this.errorMessage = error;
                      this.result = false; });
    this.refresh();
  }
}
