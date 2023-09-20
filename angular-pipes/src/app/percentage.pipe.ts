import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'percentage'
})

// creating custom angular pipe
export class PercentagePipe implements PipeTransform{
    transform(value: number, totalMarks: number, numberOfDecimals: number) {
        console.log('percantage pipe has been called!')
        return (value / totalMarks * 100).toFixed(numberOfDecimals) + '%';
    }

}