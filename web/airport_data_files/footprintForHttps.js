var f_prefix = '//www.hubei.gov.cn/footprint';

//页面加载时触发
window.onload= function() {
	$.footMark();
}

$.footMark=function (){
	var siteName = $('meta[name="SiteName"]').attr('content');// 站点名称
	if(typeof (siteName) == 'undefined') {
		siteName = '';
	}
	var columnName = $('meta[name="ColumnName"]').attr('content');// 栏目名称
	if(typeof (columnName) == 'undefined') {
		columnName = '';
	}
	var articleTitle = $('meta[name="ArticleTitle"]').attr('content');// 文章标题
	if(typeof (articleTitle) == 'undefined') {
		articleTitle = '';
	}
	var browseUrl = location.href;// 文章地址
	if(typeof (browseUrl) == 'undefined') {
		browseUrl = '';
	}
	var pubDate = $('meta[name="PubDate"]').attr('content');// 发布时间
	if(typeof (pubDate) == 'undefined') {
		pubDate = '';
	}
	var siteDomain = $('meta[name="SiteDomain"]').attr('content');// 域名地址
	if(typeof (siteDomain) == 'undefined') {
		siteDomain = '';
	}
	var url = $('meta[name="Url"]').attr('content');// 域名地址
	if(typeof (url) == 'undefined') {
		url = '';
	}

	var cookie = getCookie("dataHide2");
	//console.log("读取cookie:" + cookie);
	if (cookie == "") {
		setCookie("dataHide2", getUUID(), 30);
		cookie = getCookie("dataHide2");
		//console.log("初始化:" + cookie);
	}


	$.ajax({
		type: "get",
		url: f_prefix + "/mark/record",
		data: {
			siteName: siteName,
			columnName: columnName,
			articleTitle: articleTitle,
			browseUrl: browseUrl,
			pubDate: pubDate,
			cookieId: cookie,
			siteDomain: siteDomain,
			url: url,
		},
		dataType: "json",//数据类型为jsonp
		jsonp: "callback",//服务端用于接收callback调用的function名的参数
		success: function (res) {

		},
		error: function () {

		}
	});
}


function setCookie(name, value, days) {
	//Cookie.set(name, value, days);
	var expdate = new Date();   //初始化时间
	expdate.setTime(expdate.getTime() + days * 24 * 60 * 60 * 1000);   //时间
	document.cookie = name + "=" + value + ";expires=" + expdate.toGMTString() + ";path=/;domain=hubei.gov.cn";
}

function getCookie(cname) {
	// return Cookie.get(cname);
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function getUUID() { // 获取唯一值
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

