function calc()
{

}
function dectip()
{
    var x=parseInt(document.getElementById("TipPercent").value);
    if(x>0)
    {
        document.getElementById("TipPercent").value=x-1;
    }
    else
    {
        document.getElementById("TipPercent").value=x;
    }
}
function inctip()
{
    var x=parseInt(document.getElementById("TipPercent").value);
    if(x<100)
    {
        document.getElementById("TipPercent").value=x+1;
    }
    else
    {
        document.getElementById("TipPercent").value=x;
    }
}

function decpep()
{
    var x=parseInt(document.getElementById("PeopleNumber").value);
    if(x>0)
    {
        document.getElementById("PeopleNumber").value=x-1;
    }
    else
    {
        document.getElementById("PeopleNumber").value=x;
    }
}
function incpep()
{
    var x=parseInt(document.getElementById("PeopleNumber").value);
    if(x<100)
    {
        document.getElementById("PeopleNumber").value=x+1;
    }
    else
    {
        document.getElementById("PeopleNumber").value=x;
    }
}
function calc()
{
   var pep= document.getElementById("PeopleNumber").value;
   var tippercentage=document.getElementById("TipPercent").value;
   var bill=document.getElementById("bil").value;
   var totaltip=(tippercentage*bill)/100;
   var tpp=totaltip/pep;
   var totalperperson=tpp+(bill/pep);
   console.log(totaltip);
   console.log(tpp);
   console.log(totalperperson);
   document.getElementById('tipperperson').innerHTML="$ "+Math.round(tpp);
   document.getElementById('totalperperson').innerHTML="$ "+Math.round(totalperperson);
}