// app.js
App({
  onLaunch() {
    function Myprote (){
    }
    Myprote.prototype.test = function(){
        console.log('Myprote原型上的方法')
    }
    const myprote = new Myprote()
    console.log(myprote.test);
  },
})
// master分支第二次修改
// pc1 test分支上传git

