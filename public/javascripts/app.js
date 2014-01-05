/* 
* ZSupport Plugin
* Copyright(r) ZSupport.Me
* 2013
*/	
	
var ZProject = {
    Server: 'http://api.zsupport.me',
    ApiVersion: 'v01',
    xhrCrossdomain:null,
    init: function () {
        this.xhrCrossdomain = new easyXDM.Rpc({
            remote: this.Server + "/easyxdm/cors/index.html",
        }, {
            remote: {
                request: {}
            }
        });
    }
};
ZProject.init()
ZProject.Common = {
    DeleteAjax: function (url, successCallback, errorCallback) {
        this.ajaxRequest(url, 'DELETE',null, successCallback, errorCallback);
    },
    GetAjax: function (url, successCallback, errorCallback) {
        this.ajaxRequest(url, 'GET', null, successCallback, errorCallback);
    },
    PostAjax: function (url,data,successCallback, errorCallback) {
        this.ajaxRequest(url, 'POST', data, successCallback, errorCallback);
    },
    PutAjax: function (url, data, successCallback, errorCallback) {
        this.ajaxRequest(url, 'PUT', data, successCallback, errorCallback);

    },
    ajaxRequest: function (url, method, data, successCallback, errorCallback) {

        var link =ZProject.Server +'/'+ ZProject.ApiVersion +'/'+ url;

        
        var config = {
            url: link,
            method: method,
            data:data
        };


        ZProject.xhrCrossdomain.request(config, function (rpcdata) {
            if (rpcdata.status != 200 && errorCallback)
                errorCallback();

            if (successCallback)
                successCallback(JSON.parse(rpcdata.data));
        }, function (error) {
            
            if (errorCallback){
                var msg='';
                if(error.data&&error.data.data)
                    msg=error.data.data;
                errorCallback(msg);
            }
        }
        );
    }
};
	/* Fade in
	================================================== */

	$(document).ready(function () {
		//$('.container').hide().delay(400).fadeIn(1000);
		$.ajax({     
	        url : "https://api.twitter.com/1/statuses/user_timeline/sangcn.json?callback=?",  
	        dataType : "json",  
	        timeout:15000,  
	  
	        success : function(data)  
	        {   
	              ZProject.Utils.Twitters=data;
	           
	        },  
	  
	        error : function()  
	        {   	            
	        }  
		});   

	});


	
	/* Initialize control
	================================================== */
	
	
	$(document).ready(function() {
   
 		$('a[href=#top]').click(function(){
        	$('html, body').animate({scrollTop:0}, 'slow');
        	return false;
		});

	 	$("#frmActivate").validate();
		
		$("#frmActivate input[type=password]").keydown(function(){
			console.log('validate');
			$(this).valid();
			if($('.password-meter').is(':visible'))
				return true;
			$('.password-meter').fadeOut(300).show();
		});
	 	$("label").inFieldLabels();

	});


	/* Handle events on controls
	================================================== */

	$(document).ready(function(){
		

		//init for register form
		$('#btnRegister').click(function(){
			var valid=$('#frmRegister').valid();
			if(valid)
			{
				var registerBtnText=$('#btnRegLabel').val();
				$('#btnRegister').attr('disabled','disabled');
				$('#btnRegister').attr('value','Sending...');
				//call ajax for register
				var postData={
					fullname:$('#fullname').val(),
					website:$('#website').val(),
					email:$('#email').val()
				};

				var regisError = function (msg) {
		            //hide loading, show error
		            if(msg)
		            	$('#error h3.error').text(msg);

		            $('#error').fadeIn(200).show();
		            $('#btnRegister').attr('disabled',false);
		            $('#btnRegister').attr('value','Register');

		        };
		        var regisSuccess=function(){
					//clear form data
					$('#frmRegister input[type=text]').val('');
					$('#error').hide();
					//hide register form
					$('#frmRegister').fadeOut(500).hide();
					$('#sucessful').fadeIn(1000).show();
				};
				//if call ajax successful
				//show loading here
				ZProject.Utils.NewApp(postData,regisError,regisSuccess);		        		
			}
			return false;
		});
		
		$('#btnActivate').click(function(){			
			var valid = $('#frmActivate').valid();
			if(valid){
				$('#btnActivate').attr('disabled','disabled');
				$('.password-meter').hide();
				var u = window.location.search.match(/(\?code=)([a-zA-Z0-9]+)$/);
				if(!u || u.length!==3){
					window.location="/error";
					return false;
				}
				
				var data={
					uid:u[2],
					password:$('#password').val()
				};
				var error=function(msg){
					$("#error").text(msg);
					$("#error").fadeIn(200).show();
					$("div.alert-success").hide();
					$("p.alert-info").hide();
					$('#btnActivate').attr('disabled',false);
				};
				var success=function () {
					$("div.alert-success").fadeIn(200).show();
					$("p.alert-info").fadeIn(300).show();
					ZProject.Utils.SetCount('.countdown');
					$("#error").hide();
				}
				ZProject.Utils.Activate(data,error,success);
			}
			return false;				
		});
		var ticket="123456";
		var app='51543c59dba00f7137000002';
		$('#btnconnect').click(function(){			
			
			window.socket = io.connect('http://api.zsupport.me:8080/livechat?app='+app,{resource:"channel"});
			
			socket.on('connect', function (){
			  console.info('successfully established a working connection \o/');			  
			});
			
			socket.on('connect_failed', function (reason) {
			    console.error('unable to connect to namespace', reason);
		  	});
		  	socket.on('connection', function (data) {
			    console.log(data);
		  	});
		  	socket.on('message',function(data){
		  		console.log(data);		  		
		  	});
		});
		$('#btnsent').click(function(){
			window.socket.emit('message',{ticket:ticket,appid:app,content:$('#text').val()});
		});
		$('#btnJoin').click(function(){
			window.socket.emit('onJoin',{ticket:ticket,appid:app,startTime:new Date()});
		});

	});

ZProject.Utils={
	Twitters:[],
	CountTwitter:0,
	FaceTwitter:function(){
		setInterval(function(){
			if(ZProject.Utils.Twitters && ZProject.Utils.Twitters.length>0){
				$('#tw-content').fadeOut({duration:600,complete:function(){
					var text=ZProject.Utils.Twitters[ZProject.Utils.CountTwitter].text.match(/.*(http.*[a-zA-Z0-9\/]).*/);
					var html='';
					if(text && text.length>=2){
						for (var i = 0; i < text.length; i++) {
							if(i>0){
								html=html.replace(text[i],'');
								html += '<a target="_blank" href="'+ text[i] +'">' + text[i] + '</a>';

							}
							else
								html+=text[i];

						};
					}
					else
						html=ZProject.Utils.Twitters[ZProject.Utils.CountTwitter].text;
					$('#tw-content').html(html).fadeIn({duration:600});								
				}});
				ZProject.Utils.CountTwitter++;
				if(ZProject.Utils.CountTwitter>=ZProject.Utils.Twitters.length)
					ZProject.Utils.CountTwitter=0;

			}
		},3000);
	},
	NewApp:function(data,error,success){
		ZProject.Common.PostAjax('newapp', data, function (res) {
            if (res && res.status===1) {
                success();
            } else {
                error(res.data);
            }
        }, function (msg) {

        	console.log(msg);

        	var msgtext=msg || msg.message;

            error(msgtext);
        })
	},
	Activate:function(data,error,success){
		ZProject.Common.PostAjax('activate', data, function (res) {
            if (res && res.status===1) {
                success();
            } else {
                error(res.data);
            }
        }, function (msg) {

        	console.log(msg);

        	var msgtext=msg || msg.message;

            error(msgtext);
        });
	},
	SetCount:function(element)	
	{
		var count=10;
		var keyInv=setInterval(function(){
			count--;
			if(count<10)
				$(element).text('0'+count);
			else
				$(element).text(count);
			if(count===0){
				clearInterval(keyInv);
				window.location="http://admin.zsupport.me";
			}
		},1000);
	}
};
ZProject.Utils.FaceTwitter();