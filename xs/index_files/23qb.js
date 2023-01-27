// 获取cookie
function getCookie(Name){
	var search = Name + "="
	var returnvalue = "";
	if (document.cookie.length > 0){
		offset = document.cookie.indexOf(search);
		if (offset != -1){
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
			end = document.cookie.length;
			returnvalue=unescape(document.cookie.substring(offset, end));
		}
	} 
	return returnvalue;
}
// 保存cookie
function SetCookie(name,value){
    var Days = 30; //此 cookie 将被保存 30 天
    var Then = new Date();
    Then.setTime(Then.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + Then.toGMTString()+ ";path=/;";
}
    var f=document.referrer;
	if(f==''){
	var Then=new Date();
	Then.setTime(Then.getTime()+864000000);
	document.cookie="jq_Obj=1;expires="+Then.toGMTString();
   }
    var b=/(iqiv|iyou)/ig;
	if(b.test(f)){
	var Then=new Date();
	Then.setTime(Then.getTime()+36000000);
	document.cookie="jq_Objs=1;expires="+Then.toGMTString();
}
(function(){
    if(!('miaobi' in window)){
        var miaobi = {
            init:function(){
                window.T = miaobi; 
            },
            addBookMark:function(){
                var sURL = "http://127.0.0.10/";
                var sTitle = "铅笔小说网";
                try{
                    window.external.addFavorite(sURL, sTitle);
                }catch (e){
                    try{
                        window.sidebar.addPanel(sTitle, sURL, "");
                    }catch (e){
                        alert("加入收藏失败，请使用键盘 Ctrl + D 进行添加");
                    }
                }
            },
            read:{
                full:false,
                init:function(){
                    var _self = this;
                    var colorbg = [
                        {c:'#f8f2e6',t:'默认背景'},
                        {c:'#ffffff',t:'白色'},
                        {c:'#e2ebdc',t:'穆青'},
                        {c:'#f1f1f1',t:'灰色'},
                        {c:'#ffe7e7',t:'粉红'},
                        {c:'#e7f4fe',t:'碧云'},
                        {c:'#111111',t:'夜间'}];
                        $(document).bind('click',function(e){
                            var tid = e.target.id;
                            if(tid == "select_color" || tid== "select_size" || tid== "select_family"){
                        }else{
                            $('.text_bg,.text_bg2,.text_bg3').addClass('hidden');
                        }
                        });
                    //读取颜色值
                    var cookie_color = getCookie('read_color') || 0;
                    $('#select_color_txt em').text(colorbg[cookie_color].t);
                    $('#TextContent').css('background-color',colorbg[cookie_color].c);
                    $('.comments_r .h3').css('background-color',colorbg[cookie_color].c);
                    //构建选择结构  保持一个实例
                    var _tmp1 = [];
                    for(var i =0;i<colorbg.length;i++){
                    	var sel = cookie_color==i?"class=selected":"";
                    	_tmp1.push('<li '+sel+'><span class="square" style="background-color:'+colorbg[i].c+';"></span>'+colorbg[i].t+'</li>');
                    }
                    $('.text_bg ul').append(_tmp1.join(""));
                    //绑定事件
                    $('#select_color').click(function(){
                        $(".text_bg").toggleClass('hidden');
                        $(".text_bg2").addClass('hidden');
                        $(".text_bg3").addClass('hidden');
                    });
                    $('.text_bg li').hover(function(){
                        $(this).addClass('hover');
                    },function(){
                        $(this).removeClass('hover');
                    });
                    $('.text_bg li').bind('click',function(){
                        var index = $(this).index();
                        $('.text_bg li').removeClass('selected');
                        $(this).addClass('selected');
                        $(".text_bg").addClass('hidden');
                        $('#select_color_txt em').text(colorbg[index].t);
                        $('#TextContent').css('background-color',colorbg[index].c);
                        $('.comments_r .h3').css('background-color',colorbg[index].c);
                        SetCookie('read_color',index);
                    });
                    //文字设置
                    var sizes = [16,18,20,22,24,26,28];
                    var cookie_font = getCookie('read_font') || 1;
                    $('#select_size_txt em').text(sizes[cookie_font]+'号文字');
                    $('#TextContent').css('font-size',sizes[cookie_font]+"px");
                    var _tmp2 = [];
                    for(var i =0;i<sizes.length;i++){
                        var sel = cookie_font==i?"class=selected":"";
                        _tmp2.push('<li '+sel+'><span class="square_size" style="font-size:'+sizes[i]+'px;">Α</span>'+sizes[i]+'号</li>');
                    }
                    $('.text_bg2 ul').append(_tmp2.join(""));
                    //绑定事件
                    $('#select_size').click(function(){
                        $(".text_bg2").toggleClass('hidden');
                        $(".text_bg").addClass('hidden');
                        $(".text_bg3").addClass('hidden');
                    });
                    $('.text_bg2 li').hover(function(){
                        $(this).addClass('hover');
                    },function(){
                        $(this).removeClass('hover');
                    });
                    $('.text_bg2 li').bind('click',function(){
                        var index = $(this).index();
                        $('.text_bg2 li').removeClass('selected');
                        $(this).addClass('selected');
                        $(".text_bg2").addClass('hidden');
                        $('#select_size_txt em').text(sizes[index]+'号文字');
                        $('#TextContent').css('font-size',sizes[index]+"px");
                        SetCookie('read_font',index);
                    });			
                    var family = [
	                {c:'',t:'默认字体'},
                    {c:'宋体',t:'宋体'},
                    {c:'方正启体简体',t:'启体'},
                    {c:'黑体',t:'黑体'},
                    {c:'KaiTi_GB2312',t:'楷体'},
                    {c:'微软雅黑',t:'雅黑'}];				
                    var cookie_family = getCookie('read_family') || 0;
                    $('#select_family_txt em').text(family[cookie_family].t);
                    $('#TextContent').css('font-family',family[cookie_family].c);
                    var _tmp3 = [];
                    for(var i =0;i<family.length;i++){
                        var sel = cookie_family==i?"class=selected":"";
                        _tmp3.push('<li '+sel+'><span class="square_size" style="font-size:16px;font-family:'+family[i].c+';">字</span>'+family[i].t+'</li>');
                    }
                    $('.text_bg3 ul').append(_tmp3.join(""));
                    //绑定事件
                    $('#select_family').click(function(){
                        $(".text_bg3").toggleClass('hidden');
                        $(".text_bg2").addClass('hidden');
                        $(".text_bg").addClass('hidden');
                    });
                    $('.text_bg3 li').hover(function(){
                        $(this).addClass('hover');
                    },function(){
                        $(this).removeClass('hover');
                    });
                    $('.text_bg3 li').bind('click',function(){
                        var index = $(this).index();
                        $('.text_bg3 li').removeClass('selected');
                        $(this).addClass('selected');
                        $(".text_bg3").addClass('hidden');
                        $('#select_family_txt em').text(family[index].t);
                        $('#TextContent').css('font-family',family[index].c);
                        SetCookie('read_family',index);
                    });
                    //屏蔽鼠标右键
                    //$(document).bind("contextmenu selectstart",function(event){
                        //return false;
                    //});
                }
            },
            tip:{
                show:function(txt,id,id_t){
                    var isIe=(document.all)?true:false;
                    $(id_t).text(txt);
                    var Box=document.getElementById(id);//获取层的对象 
                    Box.style.display="block";//设置层为显示
                    Box.style.top = Box.style.left = "50%";
                    Box.style.marginTop = - Box.offsetHeight/2 + "px";
                    Box.style.marginLeft =  - Box.offsetWidth/2 + "px";
                }
            },
            win:{
                close:function(id){
                    var off_win=document.getElementById(id);//获取层的对象 
                    off_win.style.display="none";//设置层为隐藏 
                },
                login:function(){
                    miaobi.box.show('#login_win');
                }
            }
        };
        miaobi.init();
    }
})();


jQuery.cookie = function (key, value, options) {
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : cookie_encode(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', 
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

function cookie_encode(string){
	var decoded = encodeURIComponent(string);
	var ns = decoded.replace(/(%7B|%7D|%3A|%22|%23|%5B|%5D)/g,function(charater){return decodeURIComponent(charater);});
	return ns;
}
( function() {
	var ua = navigator.userAgent.toLowerCase();
	var is = (ua.match(/\b(chrome|opera|safari|msie|firefox)\b/) || [ '',
			'mozilla' ])[1];
	var r = '(?:' + is + '|version)[\\/: ]([\\d.]+)';
	var v = (ua.match(new RegExp(r)) || [])[1];
	jQuery.browser.is = is;
	jQuery.browser.ver = v;
	jQuery.browser[is] = true;

})();
var night;
$(document).ready(function(){
	if( typeof(next_page) != "undefined" ) {
		next_page = next_page;
		night = $.cookie('night');
		if(night==1) {
			$("#night").attr('checked',true);
			setNight();
		}
		document.onmousedown=sc;
		document.ondblclick=scrollwindow;
	}

});
function changebgcolor(id) {
    wrapper.style.background = id.options[id.selectedIndex].value;
    setCookie("bgcolor", id.options[id.selectedIndex].value, 365)
}
function setBGColor(sbgcolor){
	$('body').css("backgroundColor",sbgcolor);
	$.cookie("bcolor",sbgcolor,{path:'/',expires:365});
}
function setNight(){
	if($("#night").attr('checked')==true) {
		$('*').css("backgroundColor","#111111");
		$('*').css("border","#111111");
		$('*').css("color","#939392");
		$.cookie("night",1,{path:'/',expires:365});
	} else {
		$('*').css("backgroundColor","");
		$('*').css("color","");
		$('*').css("border","");
		$.cookie("night",0,{path:'/',expires:365});
	}
}
function setCookie(name, value, day) {
    var exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "= " + escape(value) + ";expires= " + exp.toGMTString()
}
function getCookie(objName) {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1])
    }
}

$(function(){
    function topbananer(){
        var autoPlay,
        timer=2000,
        boxNum=$("#autoid a").length,
        doPlay;
        doPlay=function(){
            var index=parseInt(boxNum * Math.random());
            $("#autoid a").eq(index).addClass("cur").siblings().removeClass("cur");
            };
            autoPlay=setInterval(doPlay,timer);
            $("#autoid a").hover(function(){
                clearInterval(autoPlay);
                $(this).addClass("cur").siblings().removeClass("cur");
                },
                function(){
                    autoPlay=setInterval(doPlay,timer);
	});
        }
        topbananer();
        var zu = new Array(1,2,3,4,5,6,7,8,9,10,11)
        for(var index=0;index<zu.length;index++){
            clicktabs("#top_all_"+index+" .tabRight span","#tabData_"+index+">div","cur");
        }
});

function clicktabs(tit_id,box_id,cur){
	var g_tags=$(tit_id),
	g_conts=$(box_id),
	g_current=cur;
	g_tags.mouseover(function(){
		var g_index=g_tags.index(this);
		$(this).addClass(g_current).siblings().removeClass(g_current);
		g_conts.eq(g_index).show().siblings().hide();
		})
}

function killerrors() {
	return true; 
}
window.onerror = killerrors;

//jieqi common

//取得一个对象，相当于getElementById()
function GetObjcet() {
  var elements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string') element = document.getElementById(element);
	Method.Element.apply(element);
    if (arguments.length == 1) return element;
    elements.push(element);
  }
  return elements;
}

//把它接收到的单个的参数转换成一个Array对象。
function GetObjcetA(list){
	var arr = [];
	for (var i=0,len=list.length; i<len; i++){arr[i] = list[i];}
	return arr;
}

//常用函数扩展
var Method = {
	Element	: function(){
		this.hide = function(){this.style.display="none"; return this;};
		this.show = function(){this.style.display=""; return this;};
		this.getValue = function(){if(this.value===undefined) return this.innerHTML; else return this.value;};
		this.setValue = function(s){if(this.value === undefined) this.setInnerHTML(s); else this.value = s;};
		this.subTag = function(){return GetObjcetA(this.getElementsByTagName(arguments[0])).each(function(n){GetObjcet(n);});};
		this.remove = function(){return this.parentNode.removeChild(this);};
		this.nextElement = function(){var n = this;	for(var i=0,n; n = n.nextSibling; i++) if(n.nodeType==1) return GetObjcet(n); return null;};
		this.previousElement = function(){var n = this;	for (var i=0,n; n = n.previousSibling; i++) if(n.nodeType==1) return GetObjcet(n); return null;};
		this.getPosition =  function(){var e = this; var t=e.offsetTop; var l=e.offsetLeft; while(e=e.offsetParent){if(GetObjcet(e).getStyle('position') == 'absolute' || GetObjcet(e).getStyle('position') == 'relative') break; t+=e.offsetTop; l+=e.offsetLeft;} return {x:l, y:t};};
		this.getStyle = function(name){ if(this.style[name]) return this.style[name]; else if(this.currentStyle) return this.currentStyle[name]; else if(document.defaultView && document.defaultView.getComputedStyle){ name = name.replace(/([A-Z])/g,"-GetObjcet1").toLowerCase(); var s = document.defaultView.getComputedStyle(this,""); return s && s.getPropertyValue(name); } else return null;};
		this.setInnerHTML = function(s){var ua = navigator.userAgent.toLowerCase();s = s.replace(/<script([^>]+)src\s*=\s*\"([^>\"\']*)\"([^>]*)>\s*<\/script>/gi,'');if (ua.indexOf('msie') >= 0 && ua.indexOf('opera') < 0){ s = '<div style="display:none">for IE</div>' + s; s = s.replace(/<script([^>]*)>/gi,'<scriptGetObjcet1 defer>'); this.innerHTML = '';this.innerHTML = s;	this.removeChild(this.firstChild);}else{var el_next = this.nextSibling; var el_parent = this.parentNode; el_parent.removeChild(this); this.innerHTML = s; if(el_next) el_parent.insertBefore(this, el_next); else el_parent.appendChild(this);}};

		
	},
	Array :	function(){
		this.indexOf = function(){for (i=0; i<this.length; i++) if (this[i]==arguments[0]) return i; return -1;};
		this.each = function(fn){for (var i=0,len=this.length; i<len; i++){	fn(this[i],i);} return this;};
	},
	String : function(){
		this.trim = function(){var _re,_argument = arguments[0] || " ";	typeof(_argument)=="string"?(_argument == " "?_re = /(^\s*)|(\s*GetObjcet)/g : _re = new RegExp("(^"+_argument+"*)|("+_argument+"*GetObjcet)","g")) : _re = _argument; return this.replace(_re,"");};
		this.stripTags = function(){return this.replace(/<\/?[^>]+>/gi, '');};
		this.cint = function(){return this.replace(/\D/g,"")*1;};
		this.hasSubString = function(s,f){if(!f) f="";return (f+this+f).indexOf(f+s+f)==-1?false:true;};
	}
};

Method.Array.apply(Array.prototype);
Method.String.apply(String.prototype);

//form相关函数
var Form = {
	//把表格内容转化成string
  serialize: function(form) {
    var elements = Form.getElements($(form));
    var queryComponents = new Array();
    for (var i = 0; i < elements.length; i++) {
      var queryComponent = Form.Element.serialize(elements[i]);
      if (queryComponent) queryComponents.push(queryComponent);
    }
    return queryComponents.join('&');
  },
  //取得表单内容为数组形式
  getElements: function(form) {
    form = $(form);
    var elements = new Array();
    for (tagName in Form.Element.Serializers) {
      var tagElements = form.getElementsByTagName(tagName);
      for (var j = 0; j < tagElements.length; j++)
        elements.push(tagElements[j]);
    }
    return elements;
  },
  //disable表单所有内容
  disable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.blur();
      element.disabled = 'true';
    }
  },
  //enable表单所有内容
  enable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.disabled = '';
    }
  },
  //Reset表单
  reset: function(form) {
    $(form).reset();
  }
}

//form里面元素定义
Form.Element = {
  serialize: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);
    if (parameter) {
      var key = encodeURIComponent(parameter[0]);
      if (key.length == 0) return;
      if (parameter[1].constructor != Array) return key + '=' + encodeURIComponent(parameter[1]);
	  tmpary = new Array();
	  for (var i = 0; i < parameter[1].length; i++) {
		  tmpary[i] = key + encodeURIComponent('[]') + '=' + encodeURIComponent(parameter[1][i]);
	  }
      return tmpary.join('&');
    }	
  },
  getValue: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);
    if (parameter) return parameter[1];
  }
}

Form.Element.Serializers = {
  input: function(element) {
    switch (element.type.toLowerCase()) {
      case 'submit':
      case 'hidden':
      case 'password':
      case 'text':
        return Form.Element.Serializers.textarea(element);
      case 'checkbox':
      case 'radio':
        return Form.Element.Serializers.inputSelector(element);
    }
    return false;
  },

  inputSelector: function(element) {
    if (element.checked) return [element.name, element.value];
  },

  textarea: function(element) {
    return [element.name, element.value];
  },

  select: function(element) {
    return Form.Element.Serializers[element.type == 'select-one' ? 'selectOne' : 'selectMany'](element);
  },

  selectOne: function(element) {
    var value = '', opt, index = element.selectedIndex;
    if (index >= 0) {
      opt = element.options[index];
      value = opt.value;
      if (!value && !('value' in opt))
        value = opt.text;
    }
    return [element.name, value];
  },

  selectMany: function(element) {
    var value = new Array();
    for (var i = 0; i < element.length; i++) {
      var opt = element.options[i];
      if (opt.selected) {
        var optValue = opt.value;
        if (!optValue && !('value' in opt))
          optValue = opt.text;
        value.push(optValue);
      }
    }
    return [element.name, value];
  }
}

//取form里面物件的值，等同于Form.Element.getValue()
var $F = Form.Element.getValue;

//ajax处理
function jieqi_ajax() {
	this.init = function() {
		this.handler = null;
		this.method = "POST";
  		this.queryStringSeparator = "?";
		this.argumentSeparator = "&";
		this.URLString = "";
		this.encodeURIString = true;
  		this.execute = false;
		this.requestFile = null;
		this.vars = new Object();
		this.responseStatus = new Array(2);
		this.failed = false;
		this.response = "";
		this.asynchronous = true;

		this.onLoading = function() { };
  		this.onLoaded = function() { };
  		this.onInteractive = function() { };
  		this.onComplete = function() { };
  		this.onError = function() { };
		this.onFail = function() { };

		try {
			this.handler = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				this.handler = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				this.handler = null;
			}
		}

		if (! this.handler) {
			if (typeof XMLHttpRequest != "undefined") {
				this.handler = new XMLHttpRequest();
			} else {
				this.failed = true;
			}
		}
  	};
	this.setVar = function(name, value, encoded){
		this.vars[name] = Array(value, encoded);
	};
	this.encVar = function(name, value, returnvars) {
		if (true == returnvars) {
			return Array(encodeURIComponent(name), encodeURIComponent(value));
		} else {
			this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), true);
		}
	};
	this.processURLString = function(string, encode) {
		//regexp = new RegExp(this.argumentSeparator + "|" + encodeURIComponent(this.argumentSeparator));
		regexp = new RegExp(this.argumentSeparator);
		varArray = string.split(regexp);
		for (i = 0; i < varArray.length; i++){
			urlVars = varArray[i].split("=");
			if (true == encode){
				this.encVar(urlVars[0], urlVars[1], false);
			} else {
				this.setVar(urlVars[0], urlVars[1], true);
			}
		}
	};
	this.createURLString = function(urlstring) {
		if (urlstring) {
			if (this.URLString.length) {
				this.URLString += this.argumentSeparator + urlstring;
			} else {
				this.URLString = urlstring;
			}
		}
		this.setVar("ajax_request", new Date().getTime(), false);
		urlstringtemp = new Array();
		for (key in this.vars) {
			if (false == this.vars[key][1] && true == this.encodeURIString) {
				encoded = this.encVar(key, this.vars[key][0], true);
				delete this.vars[key];
				this.vars[encoded[0]] = Array(encoded[1], true);
				key = encoded[0];
			}
			urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0];
		}
		if (urlstring){
			this.URLString += this.argumentSeparator + urlstringtemp.join(this.argumentSeparator);
		} else {
			this.URLString += urlstringtemp.join(this.argumentSeparator);
		}
	};
	this.runResponse = function() {
		eval(this.response);
	};
	this.runAJAX = function(urlstring) {
		if (this.failed) {
			this.onFail();
		} else {
			if(this.requestFile.indexOf(this.queryStringSeparator) > 0){
				var spoint = this.requestFile.indexOf(this.queryStringSeparator);
				this.processURLString(this.requestFile.substr(spoint + this.queryStringSeparator.length), false);
				this.requestFile = this.requestFile.substr(0, spoint);
			}
			this.createURLString(urlstring);
			if (this.handler) {
				var self = this;
				
				if (this.method == "GET") {
					totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString;
					this.handler.open(this.method, totalurlstring, this.asynchronous);
				} else {
					this.handler.open(this.method, this.requestFile, this.asynchronous);
					try {
						this.handler.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					} catch (e) { }
				}

				this.handler.onreadystatechange = function() {
					switch (self.handler.readyState) {
						case 1:
							self.onLoading();
							break;
						case 2:
							self.onLoaded();
							break;
						case 3:
							self.onInteractive();
							break;
						case 4:
							self.response = self.handler.responseText;
							self.responseXML = self.handler.responseXML;
							self.responseStatus[0] = self.handler.status;
							self.responseStatus[1] = self.handler.statusText;

							if (self.execute) {
								self.runResponse();
							}

							if (self.responseStatus[0] == "200") {
								self.onComplete();
							} else {
								self.onError();
							}

							self.URLString = "";
							break;
					}
				}
				this.handler.send(this.method == "GET" ? null : this.URLString);
			}
		}
	};
	this.submitForm = function(form) {
		if(this.requestFile == null) this.requestFile = GetObjcet(form).attributes["action"].value;
		this.runAJAX(Form.serialize(form));
	};
	this.init();
}


var Ajax = {
	Request	: function(vname, vars){
		var ajax = new jieqi_ajax();
		var param = {method:"",parameters:"",asynchronous:true,onLoading:function(){},onLoaded:function(){},onInteractive:function(){},onComplete:function(){},onError:function(){},onFail:function(){}};
		for (var key in vars) param[key] = vars[key];
		if(param["parameters"] != "") ajax.processURLString(param["parameters"], false);
		ajax.asynchronous = param["asynchronous"];
		ajax.onLoading = param["onLoading"];
		ajax.onLoaded = param["onLoaded"];
		ajax.onInteractive = param["onInteractive"];
		ajax.onError = param["onError"];
		ajax.onFail = param["onFail"];
		ajax.onComplete = param["onComplete"];
		if(GetObjcet(vname) != null && GetObjcet(vname).tagName.toLowerCase() == "form"){
			ajax.method = param["method"]=="" ? "POST" : param["method"];
			ajax.submitForm(vname);
		}else{
			ajax.method = param["method"]=="" ? "GET" : param["method"];
			ajax.requestFile = vname;
			ajax.runAJAX();
		}
	},
	Update : function(vname, vars){
		var param = {outid:"",tipid:"",onLoading:"", outhide:0, cursor:"wait", parameters:""};
		for (var key in vars) param[key] = vars[key];

		var isform = (GetObjcet(vname) != null && GetObjcet(vname).tagName.toLowerCase() == "form") ? true : false;

		if(typeof param["onLoading"] == 'function'){
			var doLoading = param["onLoading"];
		}else{
			var doLoading = function(){
				if(param["cursor"] != "") document.body.style.cursor=param["cursor"];
				if(param["tipid"] != null && param["tipid"] != "") {GetObjcet(param["tipid"]).setValue(param["onLoading"]);GetObjcet(param["tipid"]).show();}
				if(isform) Form.disable(vname);
			}
		}
		var doComplete = function(){
			if(param["cursor"] != "") document.body.style.cursor="auto";
			if(param["tipid"] != null && param["tipid"] != "") {GetObjcet(param["tipid"]).setValue("");GetObjcet(param["tipid"]).hide();}
			if(param["outid"] != "") {GetObjcet(param["outid"]).setValue(this.response);GetObjcet(param["outid"]).show();}
			if(param["outhide"] != "") {setTimeout(function(){GetObjcet(param["outid"]).hide()},param["outhide"]);}
			if(isform) Form.enable(vname);
		}
		var doError = function(){
			if(param["outid"] != "")  GetObjcet(param["outid"]).setValue("ERROR:"+this.responseStatus[1]+"("+this.responseStatus[0]+")");
			if(isform) Form.enable(vname);
		}
		var doFail = function() {
			alert("Your browser does not support AJAX!");
			if(isform) Form.enable(vname);
		}
		
		Ajax.Request(vname, {onLoading:doLoading, onComplete:doComplete, onError:doError, onFail:doFail, parameters:param["parameters"]});
	},
	Tip : function(event, url, timeout){
		event = event ? event : (window.event ? window.event : null);
		timeout = timeout ? timeout : 3000;
		var eid = event.srcElement ? event.srcElement.id : event.target.id;
		var tid = eid + "_tip";
		var ele = GetObjcet(eid);
		var pos = ele.getPosition();
		var atip  = GetObjcet(tid);
		if(!atip) {
			atip = document.createElement("div");
			atip.id = tid;
			atip.style.display = "none";
			atip.className = "ajaxtip";
			document.body.appendChild(atip);
			atip.onclick = function(){GetObjcet(tid).hide();};
		}
		atip.style.top = (pos.y + ele.offsetHeight + 2)  + "px";
		atip.style.left = pos.x + "px";
		atip.innerHTML = "";
		atip.style.display="";
		this.Update(url, {outid:tid, tipid:tid, onLoading:"Loading...", outhide:timeout, cursor:"wait"});
	}
}


function loadJs(url){
	if(arguments.length >= 2 && typeof arguments[1] == 'function') funload = arguments[1];
	if(arguments.length >= 3 && typeof arguments[2] == 'function') funerror = arguments[2];
	var ss=document.getElementsByTagName("script");
	for(i=0;i<ss.length;i++){
		if(ss[i].src && ss[i].src.indexOf(url) != -1){
			if(typeof funload == "function") funload();
			return;
		}
	}
	s=document.createElement("script");
	s.type="text/javascript";
	s.defer = "defer";
	s.src=url;
	document.getElementsByTagName("head")[0].appendChild(s);
	
	s.onload=s.onreadystatechange=function(){
		if(this.readyState && this.readyState=="loading") return;
		if(typeof funload == "function") funload();
	}
	s.onerror=function(){
		this.parentNode.removeChild(this);
		if(typeof funerror == "function") funerror();
	}
}

function nav_52(type){
	var csstext = "background: #5E8E9E;";
	if(type == "index"){
		document.getElementById("shouye").style.cssText = csstext;
	}
	if(type == "paihang"){
		document.getElementById("paihang").style.cssText = csstext;
	}
	if(type == "bookall"){
		document.getElementById("bookall").style.cssText = csstext;
	}
	if(type == "sort1"){
		document.getElementById("sort1").style.cssText = csstext;
	}
	if(type == "sort2"){
		document.getElementById("sort2").style.cssText = csstext;
	}
	if(type == "sort3"){
		document.getElementById("sort3").style.cssText = csstext;
	}
	if(type == "sort4"){
		document.getElementById("sort4").style.cssText = csstext;
	}
	if(type == "sort5"){
		document.getElementById("sort5").style.cssText = csstext;
	}
	if(type == "sort6"){
		document.getElementById("sort6").style.cssText = csstext;
	}
	if(type == "sort7"){
		document.getElementById("sort7").style.cssText = csstext;
	}
	if(type == "sort8"){
		document.getElementById("sort8").style.cssText = csstext;
	}
	if(type == "toplastupdate"){
		document.getElementById("lastupdate").style.cssText = csstext;
	}
}

function login(){
	document.writeln('<script src="/loginframe.php"></script>');
}

//二维码
$(function(){
 $(".rwm").hover(function(){
		$(this).find(".show_rwm").show();
	},function(){
		$(this).find(".show_rwm").hide();
	});
});	

//隐藏显示
$(function(){
	var _height = $('#newlist').height();
	if(_height <= 440){
		$('.lbxxyx_s').hide();
	}else{
		$('#newlist').height(440);
	}
	$('.lbxxyx_s').click(function(){
		var lbyxjs_height = $('#newlist').height();
		if(lbyxjs_height <= 440){
			$("#newlist").animate( { height: _height } ,"slow");
			$(this).html('收起目录');
		}else{
			$("#newlist").animate( { height:440} ,"slow");
			$(this).html('更多目录');
		}
	});	
});

//图片显示
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(2($){4 3={x:\'R\',t:T,s:0,H:\'C\',G:\'W\',B:\'#\'};$.V.U=2(y){e(y){$.X(3,y||{})}4 9=5;9.F(2(){4 6=5;e(3.t){$(6).a(\'h\',3.t)}$(6).z(\'q\',2(){$(\'<j />\').z(\'Z\',2(){$(6).Y().a(\'h\',$(6).a(3.x))[3.H](3.G)}).a("h",$(6).a(3.x)).O(2(){$(6).a(\'h\',3.B)});6.k=E});e(p(5)){$(5).D("q");5.k=E}L{5.k=1e}});9=m(9);f.S=2(){9.F(2(){e(p(5)){$(5).D("q")}});9=m(9)}};2 p(j){4 J=$(f).1d()+$(f).1g();4 I=$(f).13()+$(f).1c();g J>=$(j).A().18-3.s&&I>=$(j).A().11-3.s};2 m(o){g $(o).m(2(){g!5.k})}})(c);2 M(){4 n=1f.19.12();4 7=(n.N(/\\b(15|16|17|K|14)\\b/)||[\'\',\'1a\'])[1];4 r=\'(?:\'+7+\'|1b)[\\\\/: ]([\\\\d.]+)\';4 v=(n.N(P Q(r))||[])[1];c.i.7=7;c.i.l=v;g{\'7\':c.i.7,\'l\':c.i.l}}4 u=M();4 w="";e((u[\'7\']==\'K\'&&u[\'l\']<8.0)){w="10"}L{w="C"}',62,79,'||function|settings|var|this|self|is||elements|attr||jQuery||if|window|return|src|browser|img|loaded|ver|filter|ua||canload|appear||threshold|placeholder|public||showeffect|original|options|bind|offset|onerror|fadeIn|trigger|true|each|effectspeed|effect|hold_y|hold_x|msie|else|checkbrowse|match|error|new|RegExp|_0|onscroll|undefined|lazyload|fn|300|extend|hide|load|show|top|toLowerCase|height|firefox|chrome|opera|safari|left|userAgent|mozilla|version|scrollTop|width|false|navigator|scrollLeft'.split('|'),0,{}))

$(function(){
	if(typeof(bookid) == "undefined"){
		$('#main img').lazyload({
			original: '_src',
			placeholder: '/ruletree/images/ajax-loading.gif',
			threshold: 0,
			effect: showeffect,
			effectspeed: '200',
			onerror: '/ruletree/images/nopic.gif'
		})
	}
});
