let images= ["https://brandmark.io/logo-rank/random/bp.png", "https://brandmark.io/logo-rank/random/twitter.png", "https://brandmark.io/logo-rank/random/snap.png", "https://brandmark.io/logo-rank/random/pepsi.png", "https://brandmark.io/logo-rank/random/yc.png"];
function prev()
{
  if(document.getElementById("img").src == images[0])
  {
    document.getElementById("img").src= images[1]
  }
  else if(document.getElementById("img").src == images[1])
  {
    document.getElementById("img").src= images[2]
  }
  else if(document.getElementById("img").src == images[2])
  {
    document.getElementById("img").src= images[3]
  }
  else if(document.getElementById("img").src == images[3])
  {
    document.getElementById("img").src= images[4]
  }
  else if(document.getElementById("img").src == images[4])
  {
    document.getElementById("img").src= images[0]
  }
}

function nex()
{
  if(document.getElementById("img").src == images[0])
  {
    document.getElementById("img").src= images[4]
  }
  else if(document.getElementById("img").src == images[4])
  {
    document.getElementById("img").src= images[3]
  }
  else if(document.getElementById("img").src == images[3])
  {
    document.getElementById("img").src= images[2]
  }
  else if(document.getElementById("img").src == images[2])
  {
    document.getElementById("img").src= images[1]
  }
  else if(document.getElementById("img").src == images[1])
  {
    document.getElementById("img").src= images[0]
  }
}
