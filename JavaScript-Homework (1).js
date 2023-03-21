//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            return `matched ${dog_names[i]}`
        } else {
            console.log('No Matches')
        }
    }
}

console.log(findWords())


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(a){
    for(var i = 0; i < a.length; i++){
        if(i < 1){
            a.splice(i, 1, 'even index')
        } else if(i % 2 == 0){
            a.splice(i, 1, 'even index')
        }
    }
    console.log(a)
}

console.log(replaceEvens(given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
