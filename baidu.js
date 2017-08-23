
var keyword=document.getElementById("kw");
var srslt=document.getElementsByClassName("srch_rmd")[0];
var oUl=document.querySelector(".srch_rmd ul");
keyword.onkeyup=function(){
	var val=this.value;
	if(this.value != "") {
		srslt.style.display = "block";
	}
	else
	{
		console.log(srslt.style.display);
		srslt.style.display = "none";
	}
	var srt=document.createElement("script");
	srt.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=ancyhuang";
	document.body.appendChild(srt);

}
function ancyhuang(data){
	oUl.innerHTML="";
	data.s.forEach(function(el){
		var oli=document.createElement("li");
		oli.innerHTML="<a href='http://www.baidu.com/s?wd="+el+"'>"+el+"</a>";
		oUl.appendChild(oli);
	})

}
