var searchTpl=require('../tpl/search.string');
SPA.defineView('search',{
  html:searchTpl,
  plugins:['delegated'],
  bindActions:{
    'toClose':function(){
      this.hide();
    }
  }
})
