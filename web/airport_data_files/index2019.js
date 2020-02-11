 function checkWords() {
	  var words = $('#conditionForm input').val();
	  if (words == null || $.trim(words) == "") {
		  alert('请输入搜索关键词!');
		  return false;
	  }
	  return true;
}

 var $textfield = $('#searchWord'); 
 function chkSearch(){
	 var searchVal = $textfield.val();
	 if (searchVal == null || $.trim(searchVal) == "") {
		  alert('请输入搜索关键词!');
		  return false;
	 }
	 doSearch(searchVal);
 }
 
 function doSearch(searchWord) {
	 $url = 'http://www.hubei.gov.cn/site/hubei/search.html#/?searchWord=' + encodeURI(searchWord);
     window.open($url, '_blank');
 }
 
 $textfield.on('keypress', function (event) {
     if (event.keyCode === 13){
         chkSearch();
     }
 });
 
 
 var $fileTextfield = $('#fileSearchWord'); 
 function chkFileSearch(){
	 var searchVal = $fileTextfield.val();
	 if (searchVal == null || $.trim(searchVal) == "") {
		  alert('请输入搜索关键词!');
		  return false;
	 }
	 doFileSearch(searchVal);
 }
 
 function doFileSearch(searchWord) {
	 $url = 'http://www.hubei.gov.cn/site/hubei/search.html#/?searchWord=' + encodeURI(searchWord) + '&typeText=3';
     window.open($url, '_blank');
 }
 
 $fileTextfield.on('keypress', function (event) {
     if (event.keyCode === 13){
    	 chkFileSearch();
     }
 });