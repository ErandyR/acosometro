function counter(){
  var cant=0;
  if (document.getElementById('checkbox1').checked)
  {
    cant++;
  }
  if (document.getElementById('checkbox2').checked)
  { 
    cant++;
  }
  if (document.getElementById('checkbox3').checked)
  {
    cant++;
  }
  if (document.getElementById('checkbox4').checked)
  {
    cant++;
  }
    if (document.getElementById('checkbox5').checked)
  {
    cant++;
  }
    if (document.getElementById('checkbox6').checked)
  {
    cant++;
  }
    if (document.getElementById('checkbox7').checked)
  {
    cant++;
  }
    if (document.getElementById('checkbox8').checked)
  {
    cant++;
  }
    if (document.getElementById('checkbox9').checked)
  {
    cant++;
  }
    if (document.getElementById('checkbox10').checked){
    cant++;
  }
  console.log("cant");
  if (cant==1) {
  iluminati[9].style.visibility="visible";
  }
  if (cant==2) {
  iluminati[8].style.visibility="visible";
  }
  if (cant==3) {
  iluminati[7].style.visibility="visible";
  }
  if (cant==4) {
  iluminati[6].style.visibility="visible";
  }
  if (cant==5) {
  iluminati[5].style.visibility="visible";
  }
  if (cant==6) {
  iluminati[4].style.visibility="visible";
  }
  if (cant==7) {
  iluminati[3].style.visibility="visible";
  }
  if (cant==8) {
  iluminati[2].style.visibility="visible";
  }
  if (cant==9) {
  iluminati[1].style.visibility="visible";
  }
  if (cant==10) {
  iluminati[0].style.visibility="visible";
  }
};

