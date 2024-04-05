const array1 = [1 ,3 , 6, 5, 8, 10]
const array2 = [4, 11, 23, 7, 9]

let newArray = []
if(array1.lenght < array2.length){
        
}
for (let i = 0; i < array1.length; i++) {
   
    newArray.push(array1[i], array2[i])
}

//newArray.push(...array2.slice(array1.length));
newArray = [...newArray, ...array2.slice(array1.length)]

console.log(newArray)

