$(function(){
  //
  (function(){
    var aLi=$('#menu li');
    var oTxt=$('#search').find('.form .txt');
    var arrText=[
      '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
    ];
    var iNow=0;
    oTxt.val(arrText[iNow]);
    aLi.each(function(index){
      $(this).click(function(){
        aLi.attr('class','gradient');
        $(this).attr('class','active');
        iNow=index;
        oTxt.val(arrText[iNow]);
      });
    });
    oTxt.focus(function(){
      if($(this).val()==arrText[iNow]){
        $(this).val('');
      }
    });
    oTxt.blur(function(){
      if($(this).val()==''){
        $(this).val(arrText[iNow]);
      }
    });
  })();

  //
  (function(){
    fnTab($('.tabNav1'),$('.tabCon1'),'click');
    fnTab($('.tabNav2'),$('.tabCon2'),'click');
    fnTab($('.tabNav3'),$('.tabCon3'),'click');
    fnTab($('.tabNav4'),$('.tabCon4'),'click');
    function fnTab(oNav,aCon,sEvent){
      var aElem=oNav.children();
      aCon.hide().eq(0).show();
      aElem.each(function(i){
        $(this).on(sEvent,function(){
          aElem.removeClass('active').addClass('gradient');
          $(this).removeClass('gradient').addClass('active');
          aElem.find('a').attr('class','triangle_down_gray');
          $(this).find('a').attr('class','triangle_down_red');
          aCon.hide().eq(i).show();
        });
      });

    };
  })();

  //
  (function(){
    var oDiv=$('#fade');
    var aUlLi=oDiv.find('ul li');
    var aOlLi=oDiv.find('ol li');
    var oP=oDiv.find('p');
    var arr=[
      '爸爸去哪儿～',
      '人像摄影中的光影感',
      '娇柔妩媚、美艳大方'
    ];
    var iNow=0;
    var timer=null;
    fade();
    aOlLi.click(function(){
      iNow=$(this).index();
      fade();
    });
    oDiv.hover(function(){
      clearInterval(timer);
    },autoFade);
    function autoFade(){
      timer=setInterval(function(){
        iNow++;
        iNow%=arr.length;
        fade();
      },2000);
    };
      autoFade();
    function fade(){
      aUlLi.each(function(i){
        if(i!=iNow){
          aUlLi.eq(i).fadeOut().css('zIndex',1);
          aOlLi.eq(i).attr('class','');
        }else{
          aUlLi.eq(i).fadeIn().css('zIndex',2);
          aOlLi.eq(i).attr('class','active');
        }
      });
      oP.text(arr[iNow]);
    };
  })();

  //
  (function(){
    var aLi=$('.bbs ol li')
    aLi.mouseover(function(){
      aLi.attr('class','');
      $(this).attr('class','active');
    });
  })();

  //
  (function(){
    var aLi=$('.hot_area li');
    var arr=[
      '用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
    ];
    aLi.mouseover(function(){
      if($(this).index()==0)return;
      $('.hot_area p').remove();
      $(this).append('<p style="width:'+($(this).width()-12)+'px; height:'+($(this).height()-12)+'px;">'+arr[$(this).index()-1]+'</p>');
    });
  })();

  //
  (function(){
    var aSpan=$('.calendar h3 span');
    var aImg=$('.calendar .img');
    var oPrompt=$('.today_info');
    var oImg=oPrompt.find('img');
    var oStrong=oPrompt.find('strong');
    var oP=oPrompt.find('p');
    oPrompt.hide();
    aImg.hover(function(){
      var iLeft=$(this).parent().position().left+55;
      var iTop=$(this).parent().position().top-30;
      var index=$(this).parent().index()%aSpan.size();
      oPrompt.show().css({'top':iTop,'left':iLeft});
      oImg.attr('src',$(this).attr('src'));
      oStrong.text(aSpan.eq(index).text());
      oP.text($(this).attr('info'));
    },function(){
      oPrompt.hide();
    });
  })();

  //
  (function(){
    var oUpdate=$('#update');
    var oUl=oUpdate.find('ul');
    var oBtnUp=$('#updateUpBtn');
    var oBtnDow=$('#updateDownBtn');
    var arr=[
      {'name':'tony','time':4,'title':'那些灿烂华美的瞬间','url':'http://www.baidu.com'},
      {'name':'jhon','time':5,'title':'广东3天抓获涉黄疑犯','url':'http://www.taobao.com'},
      {'name':'rita','time':6,'title':'上海东方明珠璀璨夺目','url':'http://www.163.com'},
      {'name':'tony','time':7,'title':'那些灿烂华美的瞬间','url':'http://www.baidu.com'},
      {'name':'jhon','time':8,'title':'广东3天抓获涉黄疑犯','url':'http://www.taobao.com'},
      {'name':'rita','time':9,'title':'上海东方明珠璀璨夺目','url':'http://www.163.com'},
    ];
    var timer=null;
    var str='';
    for(var i=0;i<arr.length;i++){
      str+='<li><a href="'+arr[i].url+'"><strong>'+arr[i].name+'</strong> <span>'+arr[i].time+'分钟前</span> 写了一篇新文章：'+arr[i].title+'</a></li>';
    }
    oUl.html(str);
    //console.log(iH);
    //console.log(oUl.offset().height);
    //console.log(oUl.offsetTop);
    function upScroll(){
      oUl.animate({'margin-top':'-30px'},function(){
        oUl.find('li:eq(0)').appendTo(oUl)
        oUl.css({'margin-top':0})
      });
    };
    function downScroll(){
      oUl.animate({'margin-top':0},function(){
        oUl.prepend(oUl.find('li:last'))
        oUl.css({'margin-top':'-30px'})
      });
    };


    function autoScroll(){
      timer=setInterval(function(){
        upScroll();
      },2000);
    };
    autoScroll();
    oBtnUp.click(function(){
      upScroll();
    });
    oBtnDow.click(function(){
      downScroll();
    });
    oUpdate.hover(function(){
      clearInterval(timer);
    },autoScroll);
  })();
});
