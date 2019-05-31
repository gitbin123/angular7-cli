import { Component, ViewChild } from '@angular/core';
// 为引入子组件引入服务 viewChild 
// 动态路由跳转需要引入Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickTwo() {
    this.router.navigate(['new2019',{name:'张三'}])
  }
  // 对于动态跳转的需要依赖注入
  constructor(private router: Router) { }
  // 引入子组件并且重新命名
  @ViewChild('newnameChild') newnamechild;
  parentVal = '我是父组件传过来的值';
  clickme() {
    alert('我是父组件里面的点击事件')
  }
  ngOnInit() {
    // 调用子组件的属性
    console.log(this.newnamechild.arr + "我是子组件传过来的值")
  }
}
