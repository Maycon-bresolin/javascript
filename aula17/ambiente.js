/*let num = [8, 7, 9, 2, 1,]
num.push(3)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)




for(let pos = 0; pos<valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} */
let valores = [8, 2, 6, 3, 1, 9]
valores.sort()
for(let pos in valores) {
    console.log(`A posição ${pos} tem os valor ${valores[pos]}`)
}
