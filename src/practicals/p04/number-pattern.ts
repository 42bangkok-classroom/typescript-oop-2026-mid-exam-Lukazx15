const n = Number(process.argv[2])

if (Number.isNaN(n)||n <= 0 || n % 1 !== 0){
    process.exit
}

for (let i = 1; i <= n; i++) {  
    let str = "".repeat(n-i);  
    let count = 1;  
    for (let k = 1; k <= i; k++) {  
        str = count.toString() + str;  
        count += 1;  
    }  
    for (let h = i; h < n; h++) {  
        str += " ";  
    }  
    console.log(str);  
} 