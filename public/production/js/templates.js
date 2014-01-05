Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Trang chủ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Giới thiệu");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Tính năng");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Liên lạc");
  }

  data.buffer.push("<a name=\"top\"></a>\n<div class=\"header page-section color-a\">\n    <div class=\"container\">\n        <div class=\"navbar\">\n            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <a class=\"brand\" href=\"index.html\">\n                <img src=\"css/img/logo-web.png\" /></a>\n\n            <div class=\"nav-collapse collapse\">\n                <ul class=\"nav pull-right\">\n                  <li class=\"active\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </li>\n                  <li>\n                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "overview", options) : helperMissing.call(depth0, "linkTo", "overview", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </li>\n                  <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "features", options) : helperMissing.call(depth0, "linkTo", "features", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                  ");
  data.buffer.push("\n                  <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "linkTo", "contact", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n\n                  <li><button class=\"btn btn-primary\" onclick=\"javascript:window.location='http://eepurl.com/AR6eP'\">Dùng thử miễn phí</button></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>        \n<div class=\"upfront slider-home page-section color-a\">\n    <div class=\"container\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n</div>\n ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.FooterView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});
Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>Liên Hệ</h2>\n<div class=\"row\">\n    <div class=\"span5\">\n        <form class=\"\">\n            <div class=\"control-group\">\n                    <label class=\"control-label\" for=\"form_name\">Tên</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" class=\"span4\" id=\"form_name\">\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <label class=\"control-label\" for=\"form_email\">Email</label>\n                    <div class=\"controls\">\n                        <input type=\"text\" class=\"span4\" id=\"form_email\">\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <label class=\"control-label\" for=\"form_message\"> Nội dung</label>\n                    <div class=\"controls\">\n                        <textarea class=\"span4\" id=\"form_message\" rows=\"6\"></textarea>\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"controls action\">\n                        <button type=\"submit\" class=\"btn btn-success\">Gửi Liên Hệ</button>\n                    </div>\n                </div>\n            </form>\n    </div>\n    <div class=\"contact span2\">\n        <div class=\"vertical-stripe\"><i class=\"icon-exchange\"></i></div>\n    </div>\n    <div class=\"span5 address\">\n        <div class=\"info\">\n            <h3><i class=\"icon-map-marker\"></i> Địa chỉ</h3>\n            <p>\n                Block X.X, Floor 5, eTown building, Cong Hoa Street, HCM\n                <br> Viet Nam.\n            </p>\n            <p>\n                <i class=\"icon-phone\"></i> +84 903 545 298<br />\n\n                <i class=\"icon-envelope-alt\"></i> thaonguyenlamkim@gmail.com\n            </p>\n        </div>\n        <div class=\"social social-icons\">\n            <h3><i class=\"icon-retweet\"></i> Follow Us</h3>\n            <p>\n                <a href=\"https://twitter.com/ZSupporMe\" target=\"_blank\" class=\"twitter\"></a>\n                <a href=\"https://www.facebook.com/zsupport.me\" target=\"_blank\" class=\"facebook\"></a>                        \n            </p>\n        </div>\n    </div>\n</div>");
  
});
Ember.TEMPLATES["features"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"feature\" class=\"flex-container\">\n  <div class=\"flexslider\">\n    <ul class=\"slides\">\n      <li>\n        <h2>Phân tích, Báo cáo<h2>\n        <img src=\"images/screen_1.png\" alt=\"\"/>\n      </li>\n      <li>\n        <h2>Hỗ trợ khách hàng<h2>\n        <img src=\"images/screen_2.png\" alt=\"\"/>                \n      </li>              \n      <li>\n        <h2>Cấu hình ứng dụng<h2>\n        <img src=\"images/screen_3.png\" alt=\"\"/>                \n      </li>              \n    <li>\n        <h2>Tùy biến giao diện<h2>\n    <img src=\"images/screen_4.png\" alt=\"\"/>                \n    </li>              \n    <li>\n        <h2>Điều hướng người dùng<h2>\n    <img src=\"images/screen_5.png\" alt=\"\"/>                \n    </li>  \n    </ul>\n  </div>\n</div>");
  
});
Ember.TEMPLATES["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"footer page-section color-e\">\n    <div class=\"container\">\n        <a ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "onTop", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"head-link\" data-toggle=\"tooltip\" title=\"Scroll to Top\"><i class=\"icon-circle-arrow-up\"></i></a>\n        <div class=\"row footnote\">\n            <div class=\"span6\">\n                2013 &copy; ZSupport.Me Corporation.\n            </div>\n            <div class=\"span6\">\n                <div class=\"logos\">                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["Index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" <span class=\"btn btn-large btn-primary\">Tìm hiểu thêm</span>");
  }

  data.buffer.push("<div class=\"row\">\n    <div id=\"frontslider\" class=\"carousel slide\">\n        <div class=\"carousel-inner\">\n\n            <div class=\"item slide1 active\">\n                <div class=\"span6\">\n                    <h3>Cải thiện dịch vụ khách hàng để tăng lợi nhuận!</h3>\n                    <p>\n                        <ul>\n                            <li>Chat trực tiếp với khách hàng ngay trên website của bạn.</li>\n                            <li>Tương tác với khách hàng qua bộ công cụ ZKit của chúng tôi.</li>\n                            <li>Phân tích lưu lượng, hành vi người dùng.</li>\n                        </ul>                                \n                    </p>\n\n                    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "videos", options) : helperMissing.call(depth0, "linkTo", "videos", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </div>\n                <div class=\"span6 imgcenter below\">\n                    <img src=\"images/slide_1.png\" alt=\"iPhone webiste\" />\n                </div>\n            </div>\n            <div class=\"item slide2 \">\n                <div class=\"span6\">\n                    <h3>Cài đặt cực kỳ đơn giản.</h3>\n                    <p>\n                        <ul>\n                            <li>Đăng ký một tài khoản miễn phí và dùng thử.</li>\n                            <li>Nhúng trình chat vào website của bạn, mọi thứ sẽ làm việc.</li>\n                        </ul>\n                    </p>\n                    <p>\n                        <h3>ZKit có thể làm gì?</h3>\n                        <ul>\n                            <li>Theo dõi ngay lập tức những ai vào website của bạn.</li>\n                            <li>Chủ động chat với khách hàng.</li>\n                            <li>\"Dẫn\" khách hàng xem những sản phẩm tương đương.</li>\n                        </ul>\n                    </p>\n                    <a href=\"http://eepurl.com/AR6eP\" class=\"btn btn-large btn-primary\">Dùng thử miễn phí</a>\n                </div>\n                <div class=\"span6 imgcenter below\">\n                    <img src=\"images/slide_2.png\" alt=\"Desktop view\" />\n                </div>\n            </div>\n        </div>\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#frontslider\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#frontslider\" data-slide-to=\"1\"></li>\n        </ol>\n    </div>\n</div>   ");
  return buffer;
  
});
Ember.TEMPLATES["overview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h2>ZSupport.Me là gì?</h2>\n<div class=\"row\">\n    <div class=\"span12\">\n    <p>\n        ZSupport.Me là một nền tảng Live Chat nhúng trên website.<br>Bạn có thể nhúng mã của chúng tôi vào website của bạn và khi đó bạn có thể tương tác với khách hàng truy cập vào website của bạn.\n    </p>\n    </div>\n</div>\n<h2>Tương tác</h2>\n<p>\n        ZSupport.Me mang một trải nghiệm Live Chat \"chủ động\", có nghĩa là khách hàng truy cập website và bạn sẽ chủ động liên hệ và tư vấn họ.<br>\n        Bạn biết khách hàng nào đang xem gì trên trang của bạn, bạn có thể chủ động chuyển hướng họ tới sản phẩm tương tự.\n</p>\n<h2>Tại sao chọn ZSupport.Me</h2>\n<p>\n       Sứ mạng mang một trải nghiệm dịch vụ hỗ trợ khách hàng mới cho dịch vụ thương mại điện tử.<br>\n       Chúng tôi không mang đến cho bạn một chương trình \"Chat\" thuần túy. Chúng tôi mang lại những trải nghiệm làm khách hàng của bạn hài lòng.\n</p>\n<h2>Công nghệ</h2>\n<p>\n       Dựa trên nền tảng PaaS từ Openshift giúp chúng tôi mở rộng dễ dàng.<br>\n        Emberjs, Nodejs, socket.io, Redis, MongoDB và ElasticSearch.\n</p>");
  
});
Ember.TEMPLATES["videos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"row\">\n    <div class=\"span12\">\n        <center>\n        <iframe src=\"http://www.youtube.com/embed/RJz9CIZzuag?rel=0\" frameborder=\"0\" allowfullscreen></iframe>\n        </center>\n    </div>\n</div>\n");
  
});
