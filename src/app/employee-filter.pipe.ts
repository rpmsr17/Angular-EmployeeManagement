import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(param1: any,param2:any): any {
    if(!param1) return [];
    if(!param2) return param1;
    var search = param2.toLowerCase();
    return param1.filter((a :any) => {

      return a.name.toLowerCase().startsWith(search);

    })
  }

}
