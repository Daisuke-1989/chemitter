"use strict";define([require,"../../field","src/util/color","jquery-ui/slider","components/farbtastic/src/farbtastic"],function(a,b,c,d){var e=function(a){var b=this;this.name=a,this.domExpander=$("<div></div>"),$("<div></div>").addClass("form-colorpicker").css({float:"left"}).farbtastic(function(a){if(b.getElementExpanded()){var d=c.hex2rgb(a);b.getElementExpanded().value=[d[0],d[1],d[2],b.getElementExpanded().value[3]]}}).appendTo(this.domExpander),$("<div></div>").addClass("form-slider").css({height:"180px",marginLeft:"20px",float:"left"}).slider({orientation:"vertical",min:0,max:1,step:.01,start:function(a,b){a.stopPropagation()},slide:function(a,c){b.getElementExpanded().value=[b.getElementExpanded().value[0],b.getElementExpanded().value[1],b.getElementExpanded().value[2],c.value],a.stopPropagation()},stop:function(a){a.preventDefault()}}).appendTo(this.domExpander),$("<div />").addClass("clear").appendTo(this.domExpander)};return e.prototype=new b,e.prototype.getOptions=function(a){return a.getOptions()||this.options.options},e.prototype.showExpander=function(a){this._showExpander(a);var b=a.value||[0,0,0,1];$.farbtastic(this.domExpander.children(".form-colorpicker")).setColor(c.rgb2hex(b[0],b[1],b[2])),this.domExpander.children(".form-slider").slider("value",b[3])},e});