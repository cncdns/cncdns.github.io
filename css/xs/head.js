var currentpos,timer; 
function initialize() 
{timer=setInterval("scrollwindow()",10);} 
function clr(){clearInterval(timer);} 
function scrollwindow() 
{currentpos=document.body.scrollTop; window.scroll(0,++currentpos); 
if (currentpos != document.body.scrollTop) clr();} 
document.onmousedown=clr 
document.ondblclick=initialize 
	

$(function(){
    //���ҳ�����ݸ߶�С����Ļ�߶ȣ�div#footer�����Զ�λ����Ļ�ײ�������div#footer��������������̬��λ 
    $(window).bind("load", function() { 
        var footerHeight = 0, 
        footerTop = 0, 
        $footer = $(".footer_db"); 
        positionFooter(); 
        //����positionFooter function 
        function positionFooter() { 
            //ȡ��div#footer�߶� 
            footerHeight = $footer.height(); 
            //div#footer����Ļ�����ľ��� 
            footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px"; 
           
            //���ҳ�����ݸ߶�С����Ļ�߶ȣ�div#footer�����Զ�λ����Ļ�ײ�������div#footer��������������̬��λ 
            if ( ($(document.body).height()) < $(window).height()) { 
                $footer.css({ 
                    position: "absolute" 
                }).stop().animate({ 
                    top: footerTop 
                }); 
            } else { 
                $footer.css({ 
                    position: "static" 
                }); 
            } 
        } 
        $(window).scroll(positionFooter).resize(positionFooter); 
    }); 
})