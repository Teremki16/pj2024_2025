let dom1 = +prompt()
let dom2 = +prompt()
let dom3 = +prompt()
let summ= dom1+dom2+dom3
if(dom1 < dom2 && dom1 < dom3) console.log("перший жлоб") 
if(dom2 < dom1 && dom2 < dom3) console.log("другий жлоб") 
if(dom3 < dom1 && dom3 < dom2) console.log("третій жлоб")
    let podatok=(summ/100)*1
console.log(`dom1 give us ${dom1} gifts`) 
console.log(`dom1 give us ${dom2} gifts`) 
console.log(`dom1 give us ${dom3} gifts`) 
console.log(`all gifts ${summ}`)
console.log(`podatok ${Math.floor(podatok)}`)