window.Tracker=function(){"use strict";function a(){var a=f();document.cookie.indexOf("disableTracking=true")>-1&&this.disableTracking(),"prod"===a?(ga("create",c,"auto",{name:"angrave"}),ga("create",d,"auto",{name:"neelabhg"})):"staging"===a&&ga("create",e,"auto",{name:"neelabhgStaging"})}var b,c="UA-42515111-2",d="UA-39700861-4",e="UA-39700861-5",f=function(){var a=window.location.hostname+window.location.pathname;return"angrave.github.io/sys/"===a?"prod":"neelabhg.github.io/sys-staging/"===a?"staging":"dev"};return a.prototype.disableTracking=function(){window["ga-disable-"+c]=!0,window["ga-disable-"+d]=!0,window["ga-disable-"+e]=!0},a.prototype.isTrackingEnabled=function(){return!(window["ga-disable-"+c]&&window["ga-disable-"+d]&&window["ga-disable-"+e])},a.prototype.optout=function(){document.cookie="disableTracking=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/",this.disableTracking()},a.prototype.trackEvent=function(){var a=Array.prototype.slice.call(arguments);a.unshift("event"),ga(function(){ga.getAll().forEach(function(b){b.send.apply(b,a)})})},a.prototype.trackPageView=function(a,b){var c={page:a||window.location.pathname+window.location.search+window.location.hash};b&&(c.title=b),ga(function(){ga.getAll().forEach(function(a){a.send("pageview",c)})})},{getInstance:function(){return b||(b=new a,b.constructor=null),b}}}();