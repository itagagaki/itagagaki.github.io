document.onkeydown = function (e) {
  console.log('keydown');
  if (e.keyCode === 13) {
    let element = document.getElementById("answer");
    console.log('element');
    console.log(element);
    if (element.value === "kst"){
      alert("success");
    }
  }  
}
function test() {
  alert('ok');
}
