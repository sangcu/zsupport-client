function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}
function issupport()
{
  var ver = getInternetExplorerVersion();

  if ( ver > -1 )
  {
    if ( ver >= 10 ) 
      return true;
    else
      return false;
  }  
  return true;
}
(function($) {

	$(document).ready(function() {
	    //read images for cached
	    var imgs = new Array();
	    setTimeout(function () {
	        for (var i = 0; i < 5; i++) {
	            var img = new Image();
	            img.src = "/images/screen_" + (i + 1) + ".png";
	            imgs.push(img);
	        }
	    }, 4000);
	});

	$(window).scroll(function(){
		// this will display scroll to top link
		if ($(this).scrollTop() > 300) {
			$('.scrolltop').fadeIn();
		} else {
			$('.scrolltop').fadeOut();
		} 
	});

	$(window).load(function() {

	});

	// general stuff

}(jQuery));

var App = Ember.Application.create();
//Ember.TEMPLATES=Handlebars.templates;
App.ApplicationController = Ember.Controller.extend({
    
});

App.Router.map(function () {
    this.route("index", { path: "/" });
    this.route("overview", { path: "/overview" });
    this.route("features", { path: "/features" });
    this.route("customers");
    this.route("contact");
    this.route("videos");
});
if(issupport()){
    App.Router.reopen({
        location: 'history'
    });
}

App.ApplicationView=Ember.View.extend({
    didInsertElement:function(){
        console.log('go go');
    }
});

App.IndexRoute = Ember.Route.extend({
    setupController: function (controller) {
        
        //controller.set('title', "My App");
    }
});

App.IndexView = Ember.View.extend({
    didInsertElement: function () {
        $('#frontslider').carousel('cycle');

        $.localScroll();

        $('.bestbuy, .head-link').tooltip()

        // clients carousel
        $('.clients .carousel').flexslider({
            animation: "slide",
            easing: "swing",
            animationLoop: true,
            itemWidth: 148,
            itemMargin: 20,
            minItems: 1,
            maxItems: 10,
            controlNav: false,
            directionNav: false,
            move: 1
        });

    }
});

App.FeaturesView = Ember.View.extend({
    didInsertElement: function () {
        // clients carousel
        $('#feature').carousel('cycle');


        $('.flexslider').flexslider({
            animation: "slide",
            easing: "swing",
            animationLoop: true,            
            itemMargin: 20,
            minItems: 1,
            maxItems: 10,
            controlNav: true,
            directionNav: true,
            move: 1
        });

    }
});
App.FooterView = Ember.View.extend({    
    template:Ember.TEMPLATES['footer'],
    onTop: function () {
        $(window).scrollTo($('body'), 500);
    }
});
App.VideosView = Ember.View.extend({
    didInsertElement: function () {
        $(".span12").fitVids();
    }
});
App.OverviewRoute = Ember.Route.extend({
    setupController: function (controller) {

        //controller.set('title', "My App");
    }
});


