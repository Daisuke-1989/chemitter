"use strict";define(["jquery","src/util/ui","src/header/components/default","src/util/versioning","pouchdb","src/util/util"],function(a,b,c,d,e,f){function g(){}return f.inherits(g,c,{initImpl:function(){var b=f.getNextUniqueId(),c=new e("localDatas");this.dialog=a('<form><label for="name">Name</label><input type="text" name="name" id="'+b+'" class="text ui-widget-content ui-corner-all" />'),this.dialogOptions={title:"Save data",buttons:{Save:function(){var e=a("#"+b).val();e=e.replace(/[^a-zA-Z0-9-_]*/g,"");var f=JSON.parse(d.getDataJSON());c.get(e,function(a,b){c.put({data:f},e,b?b._rev:void 0)}),a(this).dialog("close")},Cancel:function(){a(this).dialog("close")}}}},_onClick:function(){b.dialog(this.dialog,this.dialogOptions)}}),g});