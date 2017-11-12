import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home.component';

@Component({
  templateUrl: './ProductDetails.component.html',

})
export class ProductDetailsComponent extends HomeComponent {
x=1;
 /* x: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.x = +params['code']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }	*/
}