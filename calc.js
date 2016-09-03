


var button, a, b, result,s,t,r;
s="";
t=""
r=0;
function add0(){
  s=s+0;
  t=t+0;
  result.innerHTML = s;

 }
 function add1(){
   s=s+1;
   t=t+1;
   result.innerHTML = s;

  }
 function add2(){
    s=s+2;
    t=t+2;
    result.innerHTML = s;

   }
 function add3(){
     s=s+3;
     t=t+3;
   result.innerHTML = s;

    }
  function add4(){
      s=s+4;
      t=t+4;
   result.innerHTML = s;

     }
  function add5(){
       s=s+5;
       t=t+5;
   result.innerHTML = s;

      }
  function add6(){
        s=s+6;
        t=t+6;
   result.innerHTML = s;

       }
  function add7(){
         s=s+7;
         t=t+7;
   result.innerHTML = s;

        }
  function add8(){
          s=s+8;
          t=t+8;
    result.innerHTML = s;

         }
  function add9(){
           s=s+9;
           t=t+9;
    result.innerHTML = s;

          }
  function op1(){
    if(s!=t){
      // console.log(s);
      // console.log(t);
      var p=t.substring(0,(t.length-s.length-1));
      // console.log(p);
      var d=t.charAt(t.length-s.length-1);
      // console.log(d);
      if(d=='+')
      r=parseFloat(s)+parseFloat(p);
      // console.log(r);
      if(d=='-')
      r= parseFloat(p)-parseFloat(s);
      if(d=='*')
      r= parseFloat(s) * parseFloat(p);
      if(d=='/')
      r=parseFloat(p)/parseFloat(s);
      if(d=='%')
      r=parseFloat(p)%parseFloat(s);
      t=r;
    }

      t=t+'+';
            result.innerHTML = "+";
            s="";
         }
  function op2(){
    if(s!=t){
      // console.log(s);
      // console.log(t);
      var p=t.substring(0,(t.length-s.length-1));
      // console.log(p);
      var d=t.charAt(t.length-s.length-1);
      // console.log(d);
      if(d=='+')
      r=parseFloat(s)+parseFloat(p);
      // console.log(r);
      if(d=='-')
      r= parseFloat(p)-parseFloat(s);
      if(d=='*')
      r= parseFloat(s) * parseFloat(p);
      if(d=='/')
      r=parseFloat(p)/parseFloat(s);
      if(d=='%')
      r=parseFloat(p)%parseFloat(s);
      t=r;
    }
     t=t+'-';
      result.innerHTML = "-";
      s="";
          }
  function op3(){
    if(s!=t){
      // console.log(s);
      // console.log(t);
      var p=t.substring(0,(t.length-s.length-1));
      // console.log(p);
      var d=t.charAt(t.length-s.length-1);
      // console.log(d);
      if(d=='+')
      r=parseFloat(s)+parseFloat(p);
      // console.log(r);
      if(d=='-')
      r= parseFloat(p)-parseFloat(s);
      if(d=='*')
      r= parseFloat(s) * parseFloat(p);
      if(d=='/')
      r=parseFloat(p)/parseFloat(s);
      if(d=='%')
      r=parseFloat(p)%parseFloat(s);
      t=r;
    }
      t=t+'*';
      result.innerHTML = "*";
      s="";
          }
  function op4(){
    if(s!=t){
      // console.log(s);
      // console.log(t);
      var p=t.substring(0,(t.length-s.length-1));
      // console.log(p);
      var d=t.charAt(t.length-s.length-1);
      // console.log(d);
      if(d=='+')
      r=parseFloat(s)+parseFloat(p);
      // console.log(r);
      if(d=='-')
      r= parseFloat(p)-parseFloat(s);
      if(d=='*')
      r= parseFloat(s) * parseFloat(p);
      if(d=='/')
      r=parseFloat(p)/parseFloat(s);
      if(d=='%')
      r=parseFloat(p)%parseFloat(s);
      t=r;
    }
        t=t+'/';
       result.innerHTML = "/";
       s="";
        }
 function op5(){
   if(s!=t){
     // console.log(s);
     // console.log(t);
     var p=t.substring(0,(t.length-s.length-1));
     // console.log(p);
     var d=t.charAt(t.length-s.length-1);
     // console.log(d);
     if(d=='+')
     r=parseFloat(s)+parseFloat(p);
     // console.log(r);
     if(d=='-')
     r= parseFloat(p)-parseFloat(s);
     if(d=='*')
     r= parseFloat(s) * parseFloat(p);
     if(d=='/')
     r=parseFloat(p)/parseFloat(s);
     if(d=='%')
     r=parseFloat(p)%parseFloat(s);
     t=r;
   }
      t=r;
      s="";
      result.innerHTML = r;
 }
 function op7(){
   if(s!=t){
     // console.log(s);
     // console.log(t);
     var p=t.substring(0,(t.length-s.length-1));
     // console.log(p);
     var d=t.charAt(t.length-s.length-1);
     // console.log(d);
     if(d=='+')
     r=parseFloat(s)+parseFloat(p);
     // console.log(r);
     if(d=='-')
     r= parseFloat(p)-parseFloat(s);
     if(d=='*')
     r= parseFloat(s) * parseFloat(p);
     if(d=='/')
     r=parseFloat(p)/parseFloat(s);
     if(d=='%')
     r=parseFloat(p)%parseFloat(s);
     t=r;
   }
       t=t+'%';
      result.innerHTML = "%";
      s="";
       }
function op6(){
  result.innerHTML="";
  s="";
  t="";
}
function add(){
  if(s.indexOf('.')==-1)
  {
  s=s+'.';
  t=t+'.';
  result.innerHTML = s;
}

}

window.onload = function () {

  b0=document.getElementById('d0');
  b1=document.getElementById('d1');
  b2=document.getElementById('d2');
  b3=document.getElementById('d3');
  b4=document.getElementById('d4');
  b5=document.getElementById('d5');
  b6=document.getElementById('d6');
  b7=document.getElementById('d7');
  b8=document.getElementById('d8');
  b9=document.getElementById('d9');
  b=document.getElementById('d');

  bp=document.getElementById('dp');
  bs=document.getElementById('ds');
  bm=document.getElementById('dm');
  bd=document.getElementById('dd');
  be=document.getElementById('de');
  bmo=document.getElementById('dmo');

  bac=document.getElementById('dac');

  result=document.getElementById('dis');

  b0.onclick = add0;
  b1.onclick = add1;
  b2.onclick = add2;
  b3.onclick = add3;
  b4.onclick = add4;
  b5.onclick = add5;
  b6.onclick = add6;
  b7.onclick = add7;
  b8.onclick = add8;
  b9.onclick = add9;
  b.onclick = add;

  bp.onclick = op1;
  bm.onclick = op3;
  bs.onclick = op2;
  bd.onclick = op4;
  be.onclick = op5;
  bmo.onclick= op7;

  bac.onclick = op6;
}
