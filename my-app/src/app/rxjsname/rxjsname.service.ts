import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RxjsnameService {

  constructor() { }
  getPromise(){
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve('promise 方法')
      },5000)
    })
  }
  getRxjs(){
    return new Observable <any>(Observable=>{
      let num=[1,2,3,5,5,6]
      // setTimeout(()=>{
        Observable.next(num)
      // },1000)
    })
  }
}
