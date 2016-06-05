var telClassify=require('../tpl/classify.string');
require('../lib/swiper-3.3.1.min.js');
SPA.defineView('classify',{
  html:telClassify,
  plugins:['delegated'],
  modules: [{
    name: 'content',
    container: '.m-classify-container',
    views: ['zhijgood','sx','lzh'],
    defaultTag: 'zhijgood'
  }],
  bindActions:{
    'go':function(e){
      $(e.el).addClass('active').siblings().removeClass('active');
      this.modules.content.launch(e.data.tag);
    },
    'goSearch':function(){
      SPA.open('search');
    }
  }
  // init: {
  //   indexSwiper: null,
  // }
  //,
  // init:{
  //   indexSwiper:null
  // },
  // bindEvents:{
  //   beforeShow:function(){
  //     this.indexSwiper=new Swiper('#index-swiper',{
  //       loop:true,
  //       onSlideChangeStart:function(swiper){
  //         $('.classify_L li').eq(swiper.activeIndex-1)
  //         .addClass('active').siblings().removeClass('active')
  //       }
  //     })
  //   }
  // }
})
