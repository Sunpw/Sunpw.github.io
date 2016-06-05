var tplIndex=require('../tpl/index.string');

SPA.defineView('index',{
    html:tplIndex,
    plugins:['delegated'],
    modules: [{
      name: 'content',
      container: '.m-index-container',
      views: ['home', 'classify', 'my','shoppingCar'],
      defaultTag: 'home'
    }],
    init: {
      indexSwiper: null,
      setActive: function (obj) {
        obj.addClass('active').siblings().removeClass('active');
      }
    },
    bindActions:{
      'switch.view': function (e) {
        // 视图切换方法
        this.modules.content.launch(e.data.tag);
        this.setActive($(e.el));
        //console.log($(e.el))
      },
      'exit':function(){
        this.hide();
      }
    }
})
