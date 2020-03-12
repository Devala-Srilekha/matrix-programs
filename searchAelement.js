function searchAelement(a, element){
    for (var i=0;i<a.length;i++){
    for(var j=0;j<a.length;j++)
    {
      if(a[i][j]==element){
    return true;
}
}
    }
    return false;
}
var a=[[1,2,3], [4,5,6], [7,8,9], [10,11,12]];
console.log(searchAelement(a,20));
    
        
    
