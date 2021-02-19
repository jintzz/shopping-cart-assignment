import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alterSource'
})
export class AlterSourcePipe implements PipeTransform {

  transform(imgUrl: string): any {
    if (imgUrl.startsWith('/static/'))
      imgUrl = imgUrl.replace('/static', '/assets/');
    return imgUrl;
  }

}
