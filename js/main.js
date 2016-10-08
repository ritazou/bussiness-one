$(function(){
  //搜索框
  (function(){
    var aLi=$('#menu li');
    var oText=$('#search').find('.form .txt');
    var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
    var iNow=0;
    oText.val(arrText[iNow]);
    aLi.each(function(index){
        $(this).click(function(){
          aLi.attr('class','gradient');
          $(this).attr('class','active');
        //  console.log(index);
          iNow=index;
          oText.val(arrText[iNow]);
        });
    });

    oText.focus(function(){
        if($(this).val()==arrText[iNow]){
          $(this).val('');
        }
    });
    oText.blur(function(){
        if($(this).val()==''){
          $(this).val(arrText[iNow]);
        }
    });

  })();
  //update文字滑动
  (function(){
    var oUpdate=$('#update');
    var oUl=oUpdate.find('ul');
    var iH=0;
    var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.taobao.com' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.qq.com' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.163.com' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.sina.com' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.git.com' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.nodejs.com' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.jquery.com' }
		];
    var str='';
    var oBtnUp=$('#updateUpBtn');
    var oBtnDown=$('#updateDownBtn');
    var iNow=0;
    var timer=null;

    for(var i=0;i<arrData.length;i++){
      str+='<li><a href="'+ arrData[i].url +'"><strong>'+ arrData[i].name +'</strong> <span>'+ arrData[i].time +'分钟前</span> 写了一篇新文章：'+ arrData[i].title +'…</a></li>';
    }
    oUl.html(str);
    iH=oUl.find('li').height();
  //  oUl.width=iH*arrData.length*2+'px';
    oBtnUp.click(function(){
          Move(-1);
    });
    oBtnDown.click(function(){
          Move(1);
    });
    oUpdate.hover(function(){
      clearInterval(timer);
    },autoMove);
    function autoMove(){
      timer=setInterval(function(){
        Move(-1);
      },2000);
    };
    autoMove();

    function Move(num){
      //console.log(iH);
      iNow+=num;
      if(Math.abs(iNow)>arrData.length-1){
       iNow=0;

      }
      if(iNow>0){
        iNow=-(arrData.length-1);
      }
      oUl.stop().animate({'top':iH*iNow},2000);

    };
  })();
  //选项卡切换
  (function(){
  //  fnTab('$(.tabNav1)','$(.tabCon1)','click');
      fnTab( $('.tabNav1'), $('.tabCon1'), 'click' );
      fnTab( $('.tabNav2'), $('.tabCon2'), 'click' );
      fnTab( $('.tabNav3'), $('.tabCon3'), 'click' );
      fnTab( $('.tabNav4'), $('.tabCon4'), 'click' );
    function fnTab(oNav,aCon,sEvent){
      var aElem = oNav.children();
      aCon.hide().eq(0).show();
      aElem.each(function(index){
        $(this).on(sEvent,function(){
          aElem.removeClass('active').addClass('gradient');
          $(this).removeClass('gradient').addClass('active');
          aElem.find('a').attr('class','triangle_down_gray');
          $(this).find('a').attr('class','triangle_down_red');
          aCon.hide().eq(index).show();
        });
      });
    }
  })();
  //自动播放焦点图
  (function (){
		var oDiv = $('#fade');
		var aUlLi = oDiv.find('ul li');
		var aOlLi = oDiv.find('ol li');
		var oP = oDiv.find('p');
		var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		var iNow = 0;
		var timer = null;

		fnFade();

		aOlLi.click(function (){
			iNow = $(this).index();
			fnFade();
		});
		oDiv.hover(function (){ clearInterval(timer); }, autoPlay);

		function autoPlay() {
			timer = setInterval(function () {
				iNow++;
				iNow%=arr.length;
				fnFade();
			}, 2000);
		}
		autoPlay();

		function fnFade() {
			aUlLi.each(function (i){
				if ( i != iNow ) {
					aUlLi.eq(i).fadeOut().css('zIndex', 1);
					aOlLi.eq(i).removeClass('active');

				} else {
					aUlLi.eq(i).fadeIn().css('zIndex', 2);
					aOlLi.eq(i).addClass('active');
				}
			});
			oP.text(arr[iNow]);
		}
	})();
})
