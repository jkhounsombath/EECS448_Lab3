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
}
