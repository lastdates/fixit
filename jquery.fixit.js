/**
* fixit 1.0
* fixit is a simple jQuery plugin for ......
*
* Copyright 2015, Atul Gupta
* Licensed under the MIT license.
* https://github.com/lastdates/fixit
*
* Date: Thu Feb 05 2015 15:35:11 GMT+0530 (IST)
*/
(function($){
	var e=$(window),sp=0,sd=-1,tx=0,t=0,b=0,h,f=[],fx=[],tL,
	onScroll=function(){
		var scroll = e.scrollTop()+t;
		sd = (scroll > sp) ? 1 : -1;
		sp = scroll;

		for(var i=0;i<fx.length;i++){
			if(fx[i]['T']-fx[i].t+t-tx <= sp){
				if(fx[i].e.css('position')!='fixed'){
					t+=fx[i].e.outerHeight();
					h-=fx[i].e.outerHeight();
				}
				fx[i].e.css({'position':'fixed','top':fx[i].t+tx+'px'});
			}
			else{
				if(fx[i].e.css('position')=='fixed'){
					t-=fx[i].e.outerHeight();
					h+=fx[i].e.outerHeight();
				}
				fx[i].e.css({'position':'static'});
			}
		}
		for(var i=0;i<f.length;i++){
			if(f[i].T > sp){
				f[i].y=f[i].t;
			}
			else if(h > f[i]['h']){
				if(f[i].T+f[i].H-f[i].h < sp){
					f[i].y=f[i].H-f[i].h+f[i].t;
				}
				else{
					f[i].y=sp-f[i].T+f[i].t;
				}
			}
			else if(f[i].T+f[i].H-h < sp){
				f[i].y=f[i].H-f[i].h+f[i].t;
			}
			else if(sd == 1){
				if(f[i].T+f[i].h+f[i].y-h-f[i].t < sp)
					f[i].y=sp+h-f[i].T-f[i].h+f[i].t;
			}
			else{
				if(f[i].y==0 || f[i].T+f[i].y > sp)
					f[i].y=sp-f[i].T+f[i].t;
			}
			f[i].e.css({'margin-top':f[i].y+'px'});
		}
		tL.css({'margin-top':t+'px'});
	},
	onResize=function(){
		sp = e.scrollTop()+t;
		h = e.height()-t-b;
		for(var i=0;i<f.length;i++){
			if(f[i].e){
				f[i]['T']=f[i].e.parent().offset().top;
				f[i]['H']=f[i].e.parent().height();
				f[i]['h']=f[i].e.outerHeight()+f[i].t+f[i].b;
				f[i]['y']=f[i].t;
			}
		}
		for(var i=0;i<fx.length;i++){
			if(fx[i].e){
				fx[i]['T']=fx[i].e.parent().offset().top;
			}
		}
		onScroll();
	},
	checkDocumentHeight=function(callback){
	    var lastHeight = document.body.clientHeight, newHeight, timer;
	    (function run(){
	        newHeight = document.body.clientHeight;
	        if( lastHeight != newHeight )
	            callback();
	        lastHeight = newHeight;
	        timer = setTimeout(run, 200);
	    })();
	};
	$.fn.fixit=function(options){
		if(options.t){t+=options.t;tx+=options.t;}
		if(options.b){b+=options.b;}
		if(options.f){$.merge(f,options.f);}
		if(options.fx){$.merge(fx,options.fx);}
		if(options.tL){tL=options.tL;}
		onResize();
	};
	$(document).ready(function(){
		onResize();
		e.on('resize',onResize);
		checkDocumentHeight(onResize);
		e.scroll(onScroll);
	});
})(jQuery);
