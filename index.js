window.document.onkeydown = (e) => {
  	if (e.keyCode === 13) {
        let element = document.getElementById("answer");
        if (element.value === "kst"){
            alert("success");
        }
	}  
}
function test() {
  alert('ok');
}
