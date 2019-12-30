function kiem_tra_snt(n)
{
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        console.log(n + " là số nguyên tố <br/>");
    }
    else{
        console.log(n + " không phải là số nguyên tố <br/>");
    }
}
console.log(kiem_tra_snt (1));
console.log(kiem_tra_snt (3));
console.log(kiem_tra_snt (4));
console.log(kiem_tra_snt (5));

