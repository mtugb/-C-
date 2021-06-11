// mCn
function C(m,n){
  var res=1;
  for(let r=0;r<n;r++){res*=m;m--;}
  var under = kj(n);
  var waru = sk(res,under)
  return under/waru===1 ? res/waru : res/waru +"/"+ under/waru;
}
function sk(m,n){
  return (m%n)?sk(n,m%n):n;
}
function kj(m) {
  return m===1?1:m*kj(m-1);
}
