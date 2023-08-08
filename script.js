/*let num = 7
let firstName = 'Isatay'
const isProgrammer = true 

Can do 
let $ = 10
let $num = 12
let _ = 7
let _num = 14
let num_ = 45   wrong writing
let myNum = 56  correct writing

Restricted (Qate jazy)
let 42num = 45
let my-num = 75
let if = 7



first_name = 'Isa'
isProgrammer = false //error 

// alert(firstName)         //Всплывающее окно
//console.log("Hello world")  //консольға шығарады

console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
*/

const resultElement = document.getElementById('result')         //Результаттың контейнері айнымалы ретінде көрінеді бізге
const input1 = document.getElementById('input1')                //1ші санның контейнері айнымалы ретінде көрінеді бізге
const input2 = document.getElementById('input2')                //2ші санның контейнері айнымалы ретінде көрінеді бізге
const submitBtn = document.getElementById('submit')             //Резаультат басатын батырманың контейнері айнымалы ретінде көрінеді бізге
const plusBtn = document.getElementById('plus')                 //Плюстың контейнері айнымалы ретінде көрінеді бізге
const minusBtn = document.getElementById('minus')               //минустың контейнері айнымалы ретінде көрінеді бізге
let action = '+'                                                //+ немес - басқанды білу үшін ашылған айнымалы
/*plusBtn.onclick = function(){
    var sum = Number(input1.value) + Number(input2.value)
    console.log(sum)
    submitBtn.onclick = function(){
        resultElement.textContent = sum
    }
}

minusBtn.onclick = function(){
    var sum = Number(input1.value) - Number(input2.value)
    console.log(sum)
    submitBtn.onclick = function(){
        resultElement.textContent = sum
    }
}

submitBtn.onclick = function(){
    alert("Amaldy tanda")
}*/

//плюсті басу, басқан кезде айнымалы + қабылдайды,сақтайды
plusBtn.onclick = function() {
    action = '+'
}

//минусты басу, басқан кезде айнымалы - қабылдап, сақтайды
minusBtn.onclick = function() {
    action = '-'
}

//егер шешімі 0-ден кіші болса қызыл, үлкен болса жасылға бояйды
function printResult(result) {
    result < 0 ? resultElement.style.color = 'red' : resultElement.style.color = 'green'
    resultElement.textContent = result      //результатты экранға шығарады
}

//основа, + немесе - сандарды
function summary(inp1,inp2,actionWith){
    const num1 = Number(inp1.value)                             //1ші санның мәнін сақтайтын айнымалы
    const num2 = Number(inp2.value)                             //2ші санның мәнін сақтайтын айнымалы
    return actionWith == '+' ? num1 + num2 : num1 - num2        //+ болса қосады, болмаса азайтады
}

//Calculate басқанда нәтижені шығарады
submitBtn.onclick = function() {
    //sposob 2
    const result = summary(input1,input2,action)            //мәндерді шақырады
    printResult(result)                                     //нәтижені шығарады
    /*sposob 1
    if (action == '+'){
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
        printResult(sum)
    }
    else if (action == '-'){
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum
        printResult(sum)
    }*/
}