import { Component, OnInit, Input } from '@angular/core';
import { map, filter } from 'rxjs/operators';
// 引入http请求
import { HttpClient, HttpHeaders } from '@angular/common/http'
// 为响应父元素调用子元素给子元素传参 子元素需要引入模块Input 

// 引入服务
import { HeroService } from '../hero.service';
// 引入异步服务
import { RxjsnameService } from '../rxjsname/rxjsname.service'

@Component({
  selector: 'app-new-name',
  templateUrl: './new-name.component.html',
  styleUrls: ['./new-name.component.scss']
})
export class NewNameComponent implements OnInit {
  // 类似于父元素，子元素也要重新获取
  @Input() parentVal: string
  @Input() clickme: any
  @Input() home: any
  // title = "今天是20190313"
  // public title="今天是20190313"
  // title:string="今天是20190313"
  public title: any = '今天是20190313'
  public h = ""
  public id = "id123"

  arr = [1, 2, 3, 4, 5, 6]
  arrObj = [{ name: '张三', age: 12 }, { name: '李四', age: 151 }]

  num = 55
  datenow = new Date()
  parentVaule = ''
  // es6 实例之后调用 用于依赖注入
  constructor(private storage: HeroService, private rxjs: RxjsnameService, public http: HttpClient) {
    console.log(this.title)
    let _this = this
    // 服务调取
    // this.storage.add()
    // console.log(this.storage.newServer)
  }
  // 点击事件
  clickMe(item) {
    alert(item)
    this.iptval = "我要变化"
  }
  // 表单事件

  keyupme(event) {
    console.log(event.target.value)
  }
  iptval = 'ww'
  ddnum = 'aaqdeQWE'
  // angular 只调用一次 获得组件指令中的值
  ngOnInit() {
    //父元素调取回来的值
    // console.log(this.parentVal)
    // this.home.clickme()
    this.h = "<h2>这是一个 h2 用[innerHTML]来解析</h2>";
    console.log(this.title)
    console.log(this.storage.newServer)
    // =============================
    // 对于服务里面是异步的进行处理
    // promise定义调取回来数据、
    this.rxjs.getPromise().then(data => {
      console.log(data)
    })
    // RXjs定义调取回来数据
    // let rxjs=this.rxjs.getRxjs().subscribe(data=>{
    //   console.log(data)
    // })
    // 通过unsubscribe取消订阅，就是异步的返回
    // rxjs.unsubscribe()
    // filter map方法
    // this.rxjs.getRxjs().pipe(filter(val => val % 2 == 0)).subscribe(data => { console.log(data) })
    // ===========================================
    // http get请求
    let api = 'http://a.itying.com/api/productlist'
    this.http.get(api).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
    // http post请求 需要手动设置请求类型
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let apiPost = 'http://127.0.0.1:3000/doLogin'
    this.http.post(apiPost, { name: '张三', age: '20' }, httpOptions).subscribe(response => {
      console.log(response)
    })
    //  jsonp 请求数据
    let apiJson = "http://a.itying.com/api/productlist";
    this.http.jsonp(apiJson, 'callback').subscribe(response => {
      console.log(response);
    });
    // ===================================================
  }
  // 对原生直接操作的方法
  ngAfterViewInit() {
    console.log(this.parentVal)
    //  ===================
    var docm = document.getElementById("docm")
    docm.style.color = "red"
  }
  // 自定义方法
  ngDoCheck(){
  
  }

}
