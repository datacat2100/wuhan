/**
 *@param(_nPageCount):总页数
 *@param(_nCurrIndex):当前页,0是第一页
 *@param(_sPageName):页面文件名前缀
 *@param(_sPageExt):页面文件名后缀
 *@param(_pageNum):显示的最大页数
 *@param(_controlId):显示导航的DOM节点
 */
function pageControl(_nPageCount, _nCurrIndex, _sPageName, _sPageExt, _pageNum, _controlId){
	var pageNavHTML = '<ul class="pagination">', 
	    pagesContainer = document.getElementById(_controlId),
	    midIndex = 0,
	    nCurrIndex = 0,
	    startPageIndex = 0,
	    endPageIndex = 0,
        formatNUM = function(_v){
            if (_v < 10) {
                return "0" + _v;
            }
            else {
                return _v;
            }
        };
	
	if (_nPageCount == null || _nPageCount <= 1) {
		return;
	}
	
	if (_pageNum > _nPageCount) {
		_pageNum = _nPageCount;
	}
	
	if (_pageNum < 1) {
		_pageNum = 1;
	}
	
	midIndex = Math.ceil(_pageNum / 2.0);
	nCurrIndex = _nCurrIndex || 0;
	startPageIndex = (_nPageCount - (_nCurrIndex - 1 - midIndex) > _pageNum) ? ((_nCurrIndex - midIndex + 1 < 0) ? 0 : ((_nCurrIndex - midIndex + 1 >= _nPageCount - _pageNum) ? _nPageCount - _pageNum : _nCurrIndex - midIndex + 1)) : (_nPageCount - _pageNum);
	endPageIndex = startPageIndex + _pageNum;
	
	if (nCurrIndex == 0) {
		pageNavHTML += '<li><a href=\"javascript:void(0);\" target=\"_self\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>';
	}
	else {
		if (nCurrIndex == 1) {
			pageNavHTML += '<li><a href=\"' + _sPageName + '.' + _sPageExt + '\" target=\"_self\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>';
		}
		else {
			pageNavHTML += '<li><a href=\"' + _sPageName + '_' + (nCurrIndex - 1) + '.' + _sPageExt + '\" target=\"_self\" aria-label=\"Previous\" ><span aria-hidden=\"true\">&laquo;</span></a></li>';
		}
	}
	
	for (var i = startPageIndex; i < endPageIndex; i++) {
		if (nCurrIndex == i) {
			if (_pageNum > 1) {
				pageNavHTML += '<li class="active"><a href=\".\" target=\"_self\">' + formatNUM(i + 1) + '</a></li>';
			}
		}
		else {
			if (i == 0) {
				pageNavHTML += '<li><a href=\"' + _sPageName + '.' + _sPageExt + '\" target=\"_self\" >' + formatNUM(i + 1) + '</a></li>';
			}
			else {
				pageNavHTML += '<li><a href=\"' + _sPageName + '_' + i + '.' + _sPageExt + '\" target=\"_self\" >' + formatNUM(i + 1) + '</a></li>';
			}
			
		}
	}
	
	if (nCurrIndex < _nPageCount - 1) {
		pageNavHTML += '<li><a href=\"' + _sPageName + '_' + (nCurrIndex + 1) + '.' + _sPageExt + '\" target=\"_self\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>';
	}
	else {
		pageNavHTML += '<li><a href=\"javascript:void(0);\" target=\"_self\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>';
	}
	
	pageNavHTML += '</ul>';
	
	pagesContainer.innerHTML = pageNavHTML;
}