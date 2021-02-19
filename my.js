function check(){
    let primenumber = document.getElementById('primenumber').value;
    let count = 0;
    for(let i = 1;i <= primenumber; i++){
        if(primenumber % i == 0){
            count++;
        }
    }
    if(count == 2){
        document.getElementById('result').innerHTML = primenumber + ' là số nguyên tố';
    } else {
        document.getElementById('result').innerHTML = primenumber + ' không phải số nguyên tố';  
    }
}