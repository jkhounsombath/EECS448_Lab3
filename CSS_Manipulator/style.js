function update()
{
  let bor_r= document.getElementById("borderRed").value;
  let bor_g= document.getElementById("borderGreen").value;
  let bor_b= document.getElementById("borderBlue").value;
  let bor_w= document.getElementById("borderWidth").value;
  let bor= document.getElementById("border");
  bor.style.border= "solid";
  bor.style.borderWidth= bor_w+"px";
  bor.style.borderColor= "rgb("+bor_r+","+bor_g+","+bor_b+")";
  let bg_r= document.getElementById("backgroundRed").value;
  let bg_b= document.getElementById("backgroundBlue").value;
  let bg_g= document.getElementById("backgroundGreen").value;
  bor.style.backgroundColor= "rgb("+bg_r+","+bg_g+","+bg_b+")";
}
