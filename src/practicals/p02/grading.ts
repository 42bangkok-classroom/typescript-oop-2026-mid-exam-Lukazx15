const input = Number(process.argv[2])

if (Number.isNaN(input)||input<0||input>100){
    console.log('Invalid input')
}else 
if (input <= 49){
    console.log('F')
}else 
if (input <= 59){
    console.log('D')
}else 
if (input <= 69){
    console.log('C')
}else
if (input <= 79){
    console.log('B')
}else 
if (input <= 100){
    console.log('A')
}