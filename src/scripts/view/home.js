var homeTpl = require('../tpl/home.string');

SPA.defineView('home', {
  html: homeTpl,
  plugins:['delegated',{
    name:'avalon',
    options:function(vm){
      vm.lifelist=[];
    }
  }],
  bindEvents:{
    'beforeShow':function(){
      var vm=this.getVM();
      $.ajax({
        url:'/api/getlifelist.php',
        success:function(res){
          vm.lifelist=res.data;
        }
      })
    }
  }
});
