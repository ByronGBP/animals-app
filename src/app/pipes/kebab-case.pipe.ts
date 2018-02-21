import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {
 
  
  // transform(value: any, args?: any): any {
  //   if (typeof value !== 'string') {
  //     return '';
  //   }
  //   const valueLowerCase = value.toLowerCase()
  //   const splitedValue = valueLowerCase.split(' ')
  //   const valueKebabCase = splitedValue.join('-')
  //   return valueKebabCase;
  // }

 transform(value: any, symbol: string): any {
    if (typeof value !== 'string') {
      return '';
    }
    if (!symbol){
      symbol = '-'
    }
    const valueLowerCase = value.toLowerCase()
    const splitedValue = valueLowerCase.split(' ')
    const valueKebabCase = splitedValue.join(symbol)
    return valueKebabCase;
  } 

}
