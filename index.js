window.document.onkeydown = (e) => {
  console.log('keydown');
  if (e.keyCode === 13) {
    let element = document.getElementById("answer");
    console.log('element:');
    console.log(element);
    if (element) {
      console.log('element.value:' + element.value);
      if (element.value === "kst"){
        alert("success");
      }
    }
  }  
}
