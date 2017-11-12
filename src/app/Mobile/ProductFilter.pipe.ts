import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ProductFilter'
})

/*Prouct Filter According to Brand Color and Price*/
export class ProductFilterPipe implements PipeTransform {
    transform(value, min,max,color,brand) {
        return value.filter(phone =>{
        	let res;
        	if(color == "all" && brand == "all"){
             	res= phone.price >= min && phone.price <= max;
             }
            if(color != "all" && brand == "all"){
             	res= phone.price >= min && phone.price <= max && phone.color == color;
             }
            if(color == "all" && brand != "all"){
             	res= phone.price >= min && phone.price <= max && phone.brand == brand; 
             }
             if(color != "all" && brand != "all"){
             	res= phone.price >= min && phone.price <= max && phone.color == color && phone.brand == brand;
             }
             return res ;
        })
    }
}
