
console.log('This would be the main JS file.');

window.onload = function(){
	for(var i=0; i<document.getElementsByClassName("shyButton").length; i++){
		document.getElementsByClassName("shyButton")[i].onclick = function(){
			if(this.innerText == "展开"){
				this.parentNode.nextSibling.nextSibling.style.display = "block";
				// console.table(this);
				this.innerText = "收起";
			}else{
				this.parentNode.nextSibling.nextSibling.style.display = "none";
				// console.table(this);
				this.innerText = "展开";
			}
		}
	}
}