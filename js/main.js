$(function(){
    
    "use strict";
    
    $('article button.Replies').click(function(){
    	$('article .article-footer').slideToggle();
    })

    $('footer .butn').click(function(){
    	$('html,body').animate({
    		scrollTop: 0
    	},1000);
    })

    
})