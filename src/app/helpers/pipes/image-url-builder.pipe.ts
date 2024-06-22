import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrlBuilder',
  standalone: true,
})
export class ImageUrlBuilderPipe implements PipeTransform {
  transform(value: string | null): string | null {
    return value ? `https://icherniakov.ru/yt-course/${value}` : null;
  }
}
