//$(function(){
//	$("body").prepend('<div style="z-index:1080;" class="modal fade" tabindex="-1" role="dialog" id="myModal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><p>\u60a8\u6240\u8bbf\u95ee\u7684\u9875\u9762\u5c06\u8df3\u8f6c\u5230\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u53ef\u80fd\u4f1a\u6709\u5b89\u5168\u98ce\u9669\uff0c\u786e\u5b9a\u8981\u7ee7\u7eed\u5417\uff1f</p><input class="outterUrlDom" type="hidden" /></div><div class="modal-footer"><button type="button" class="btn btn-primary sure_btn">\u786e\u5b9a\u8bbf\u95ee</button><button type="button" class="btn btn-default cancel_btn">\u53d6\u6d88\u5e76\u5173\u95ed</button></div></div></div></div>');
//	var $modal = $('#myModal').modal({
//		show:false
//	});
//	$('#myModal .sure_btn').click(function(){
//		$modal.modal('hide');
//    	window.open($('#myModal .outterUrlDom').val());
//    });
//    $('#myModal .cancel_btn').click(function(){
//    	$modal.modal('hide');
//        $('#myModal .outterUrlDom').val('');
//    });
//    $("body").on("click","a",function(event){
//		var innerUrlList = [
//		                    '.',
//		                    '#',
//		                    '/',
//		                    'javascript',
//		                    'http://www.hubei.gov.cn',
//		                    'https://www.hubei.gov.cn',
//		                    'http://zwfw.hubei.gov.cn',
//		                    'https://zwfw.hubei.gov.cn',
//		                    'https://mp.weixin.qq.com',
//		                    'http://mail.hubei.gov.cn',
//		                    'https://mail.hubei.gov.cn',
//		                    'http://en.hubei.gov.cn',
//		                    'https://en.hubei.gov.cn',
//		                    'http://fr.hubei.gov.cn',
//		                    'https://fr.hubei.gov.cn',
//		                    'http://wsxf.hbzw.gov.cn',
//		                    'https://wsxf.hbzw.gov.cn',
//		                    'http://hubei.intertid.com',
//		                    'https://hubei.intertid.com',
//		                    'http://oauth.hubei.gov.cn',
//		                    'https://oauth.hubei.gov.cn',
//		                    'http://yj.hubei.gov.cn',
//		                    'https://yj.hubei.gov.cn',
//		                    'http://cty.hbbsdt.gov.cn',
//		                    'https://cty.hbbsdt.gov.cn',
//							'http://wza.hubei.gov.cn',
//							'http://hbfb.hubei.gov.cn',
//							'http://shdf.hbrbmedia.com',
//							'https://hbfb.hubei.gov.cn',
//							'https://media.hubei.gov.cn',
//							'http://jyh.hubei.gov.cn',
//							'https://jyh.hubei.gov.cn',
//							'http://www.12315.cn'
//		                   ];
//		var isOutterUrl = true;
//		var url = this.href;
//		if (!(typeof(url) == "undefined" || url == null || url =='')) {
//			for (var i in innerUrlList) {
//				console.log(innerUrlList[i] + " :   " + url.indexOf(innerUrlList[i]))
//                if (url.indexOf(innerUrlList[i]) == 0) {
//                    isOutterUrl = false;
//                    break;
//                }
//            }
//		} else {
//			isOutterUrl = false;
//		}
//		
//		if (isOutterUrl) {
//			$('#myModal .outterUrlDom').val(url);
//			$modal.modal('show');
//			return false;
//		}
//	});
//})