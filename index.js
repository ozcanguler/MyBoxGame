
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var boxPattern = [1, 10, 100,1000,10000,25000,50000,100000,250000,500000];
var userClickedBox = [];

var started = true;
var level = 0;
shuffle(boxPattern);

// var box_one=boxPattern[0];
// var box_two=boxPattern[1];
// var box_three=boxPattern[2];
var offerLeft;
var myBox;
var myBoxAlt;
var banks_Offer_Price=0;
var offer=0;
for(var i=0;i<boxPattern.length;i++)
{
  document.querySelectorAll("button")[i].setAttribute("alt",boxPattern[i]);
}

function getPattern(){
for(var i=0;i<boxPattern.length;i++)
{
  document.querySelectorAll("button")[i].getAttribute("alt");
}
}
// function chooseOne()//https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm    confirm box  bak
// {
//   prompt("1 nolu kutuyu açmak istiyor musunuz?");
// alert("Son Kararınız mı?");
// }

if (started) {
//  $("#level-title").text("Level " + level);
  nextSequence();
  started = true;
}


function first_Banks_Offer()
{
  for(var i=0;i<boxPattern.length;i++)
  {
    offer=offer+parseInt(boxPattern[i]); //String ifadeler birleştirildiği için int çevirdim.

  }
//return Math.round(((offer+parseInt(myBoxAlt))/boxPattern.length+1) * 100) / 100;
//return Math.round((offer+parseInt(myBoxAlt))/(boxPattern.length+1)); //iyi teklif
return Math.round((offer+parseInt(myBoxAlt))/(boxPattern.length+15));
}

function second_Banks_Offer()
{
  offer=0;
  for(var i=0;i<boxPattern.length;i++)
  {

    offer=offer+parseInt(boxPattern[i]); //String ifadeler birleştirildiği için int çevirdim.

  }
//return Math.round(((offer+parseInt(myBoxAlt))/boxPattern.length+1) * 100) / 100;
//return Math.round((offer+parseInt(myBoxAlt))/(boxPattern.length+1)); //iyi teklif
return Math.round((offer+parseInt(myBoxAlt))/(boxPattern.length+3));
}

function third_Banks_Offer()
{
  offer=0;
  for(var i=0;i<boxPattern.length;i++)
  {

    offer=parseInt(myBoxAlt)+parseInt(boxPattern[i]); //String ifadeler birleştirildiği için int çevirdim.

  }
//return Math.round(((offer+parseInt(myBoxAlt))/boxPattern.length+1) * 100) / 100;
//return Math.round((offer+parseInt(myBoxAlt))/(boxPattern.length+1)); //iyi teklif
return Math.round(offer/2);
}

function nextSequence() {
//  userClickedPattern = [];
//  level++;
//$("#level-title").text("Level " + level);


// for(var k=0;k<gamePattern.length;k++){
//   (function(k) {  //fonksiyon dizinin her elemanını zamanlayıcı ile seçer.
//       setTimeout(function(){$("#" + gamePattern[k]).fadeIn(100).fadeOut(100).fadeIn(100);
//       playSound(gamePattern[k]);}, 1000 + (1000 * k));
//
// })(k);
// }
}





$(".box").click(function() {

    // Save it!
    if(level===0)
    {offerLeft=4;
//İndex Sorunu var !!!!!!!!!!!!!!!!!!!!!!!!!
  if (window.confirm("Kutuyu Seçmek İstiyor musunuz?")) {
myBox=$(this).attr("id");
myBoxAlt=$(this).attr("alt");

$("#offer").show();

document.getElementById(myBox).disabled = true;
//boxPattern.pop(userChosenAlt);
var boxPattern_Splice;
boxPattern_Splice=boxPattern.indexOf(parseInt(myBoxAlt)); //indexi bulmak için çevrim işlemi

  boxPattern.splice(boxPattern_Splice, 1);  //remove array

$(this).addClass('move');   // ilk kutuyu seçerken kutuyu sol üste taşıma
level++;
    $( "#offerText" ).text(offerLeft--);// Teklife Kalan Kutu sayısı
}

}



else if (window.confirm("Kutuyu Açmak İstiyor musunuz?")) {


 var userChosenColour = $(this).attr("id");
var userChosenAlt = $(this).attr("alt");


//$("#"+userChosenColour).css("background-image" , "none"); //animasyon eklenebilir.css("background-image" , "none");
$("#"+userChosenColour).html(userChosenAlt);




for(var h=0;h<10;h++){
var throughTextValue=$( ".tableShow" ).find( "td" ).eq( h ).html();
if(throughTextValue===userChosenAlt){ $( ".tableShow" ).find( "td" ).eq( h ).addClass("through-text");
}

}


//$( ".tableShow" ).find( "td" ).eq( h ).addClass("through-text");
//$("td"+userChosenColour+"y").addClass("through-text");//if ile burada kontrol yapıcaz yada karışmış kutuların attributlarını htmle yollayacağız

userClickedBox.push(userChosenAlt);

boxPattern_Splice=boxPattern.indexOf(parseInt(userChosenAlt)); //indexi bulmak için çevrim işlemi
boxPattern.splice(boxPattern_Splice, 1);  //remove array

document.getElementById(userChosenColour).disabled = true;

choose_Color();

function choose_Color(){

if(userChosenAlt<="1000")
{

  $("."+userChosenColour+".box").addClass("green");
}

else if(userChosenAlt==="50000"){  $("."+userChosenColour+".box").addClass("yellow");}
else if(userChosenAlt>"1000" && userChosenAlt<"250000")
{

  $("."+userChosenColour+".box").addClass("yellow");
}
else if(userChosenAlt>"240000")
{

  $("."+userChosenColour+".box").addClass("red");
}

}



alert(userChosenAlt);

level++;
$( "#offerText" ).text(offerLeft--);

if(level===5){  setTimeout(function () {
  banks_Offer_Price=first_Banks_Offer();

    if (window.confirm("Bankanın Teklifi:"+banks_Offer_Price))
    {alert("Tebrikler "+banks_Offer_Price+" kazandınız.");document.getElementById(myBox).disabled = false;level=-10;$("#offer").html("Kazanılan Miktar:"+banks_Offer_Price);}//$("*td").removeClass("through-text");//$("*button").removeClass("green red yellow");//document.getElementsByClassName("tableShow").disabled=true;}
  else  level++;offerLeft=3;$( "#offerText" ).text(offerLeft--);
}, 100);}

if(level===9)
{  setTimeout(function () {
  banks_Offer_Price=second_Banks_Offer();

    if (window.confirm("Bankanın Teklifi:"+banks_Offer_Price))
    {alert("Tebrikler "+banks_Offer_Price+" kazandınız.");document.getElementById(myBox).disabled = false;level=-10;$("#offer").html("Kazanılan Miktar:"+banks_Offer_Price);}//document.getElementById(myBox).disabled = false;level=-10; startover() yerine kullan.
  else  level++;offerLeft=1;$( "#offerText" ).text(offerLeft--);
}, 100);}

if(level===11)
{ setTimeout(function () {
banks_Offer_Price=third_Banks_Offer();
  if (window.confirm("Bankanın Teklifi:"+banks_Offer_Price))
  {alert("Tebrikler "+banks_Offer_Price+" kazandınız.");document.getElementById(myBox).disabled = false;$("#offer").html("Kazanılan Miktar:"+banks_Offer_Price);}
else $("#offer").html("Kazanılan Miktar:"+myBoxAlt);  alert("Tebrikler "+myBoxAlt+" kazandınız.");document.getElementById(myBox).disabled = false;}, 100);}


}
});

// bir buton oluştur o buton ile yeniden başlatma olsun startover fonksiyonu ile yap
function startOver() {
  level = 0;
  boxPattern = [1, 10, 100,1000,10000,25000,50000,100000,250000,500000];
  started = false;
  $("*button").attr('disabled', false);
  $("*button").removeClass("green red yellow");
  $("*button").removeClass("move");
  shuffle(boxPattern);
}


//My Animation
/*


 $("#"+userChosenColour).hover(function(){
   $("#"+userChosenColour).css("background-position", "0 -81px");
   $("#"+userChosenColour).css("font-size", "2rem");
 document.getElementById(userChosenColour).disabled = true;
 }, function(){
 $("#"+userChosenColour).css("background-position", "0");
 $("#"+userChosenColour).css("font-size", "0rem");
 document.getElementById(userChosenColour).disabled = false;
  });
*/
