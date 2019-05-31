import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
   newServer="http://wwww.baidu.com"
    add(){
     alert('我是服务里面的事件')
   }
  constructor() {
    
  }
}
