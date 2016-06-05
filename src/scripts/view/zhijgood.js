var zhijTpl=require('../tpl/zhijgood.string');
SPA.defineView('zhijgood',{
  html:zhijTpl
  // plugins:['delegated',{
  //   name:'avalon',
  //   options:function(vm){
  //     vm.zhijgood=[];
  //   }
  // }],
  // bindEvents:{
  //   'beforeShow':function(){
  //     var vm=this.getVM();
  //     $.ajax({
  //       async:true,
  //       url:'/api/zhijgood.php',
  //       success:function(res){
  //         console.log(1);
  //         vm.zhijgood=res.data;
  //       }
  //     })
  //   }
  // }
});
