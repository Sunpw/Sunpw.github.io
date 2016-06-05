require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');

require('./view/search.js')
require('./view/zhijgood.js');
require('./view/shoppingCar.js');
require('./view/sxfood.js');
require('./view/lzh.js');
require('./view/home.js');
require('./view/my.js');
require('./view/classify.js');
require('./view/guide.js');
require('./view/index.js');

// 配置视图的信息
SPA.config({
  indexView: 'guide'
});
