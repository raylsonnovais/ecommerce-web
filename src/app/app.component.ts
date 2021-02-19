import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ProductModel } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-web';

  customers: ProductModel[];
  totalRecords: number;
  loading: boolean;
  product = new ProductModel();
  textForSearch: any = null;

  constructor(private productService: ProductService){
  }

  loadCustomers(event: LazyLoadEvent){
    this.loading = true;
    let page = event.first;
    if(page !== undefined && page > 0){
      page = page / 10;
    }

    if(this.textForSearch === null || this.textForSearch === ''){
      this.consultaPaginada(page, event.rows)
    } else{
      this.consultaPaginadaPorNome(this.textForSearch, page, event.rows);
    }
  }

  consultaPaginada(pagina:any, limite: any){
    this.productService.consultaPaginada(pagina,limite).subscribe(resp => {
      this.customers = resp.content;
      this.totalRecords = resp.totalElements;
      this.loading = false;
    })
  }

  consultaPaginadaPorNome(nome:any, pagina:any, limite: any){
    this.productService.consultaPaginadaPorNome(nome, pagina, limite).subscribe(resp => {
      this.customers = resp.content;
      this.totalRecords = resp.totalElements;
      this.loading = false;
    });
  }

  buscaPorNomeProduto(event){
    if(event.keyCode === 13 && this.textForSearch !=null){
      this.loading = true;
      this.consultaPaginadaPorNome(this.textForSearch,0,10);
    }
  }


}
