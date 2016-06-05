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
        url:'/yhlife/mock/lifelist.json',
        success:function(res){
          vm.lifelist=res.data;
        }
      })
    }
  }
});
