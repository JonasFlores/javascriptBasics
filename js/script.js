console.log("00 - [OK] Welcome! -> Please open the source-code.")

var GLOBAL_VAR = 0

const myPromise = new Promise((result, reject) => {
    
    setTimeout(() => {  result("XX - [OK] RETURN PROMISE"); 
                        console.log("08 - [OK] LOG inside of myPromise")
                    }, 2000);
    
/*  LOG  */ console.log("01 - [??] LOG number 1, it's inside of myPromise, How is it possible? ")
    
    if(false){ //CHANGE THIS FOR TRUE AND SEE WHAT HAPPENS

        reject("It Was reject");
        console.log("02 - [??] [IF] LOG inside of myPromise declaration")

    }else{
        console.log("02 - [??] [ELSE] LOG inside of myPromise declaration")
    }

})

/*  LOG  */ console.log("03 - [OK] LOG in script.js")


function learningPromises() {
    //4
    console.log("04 - [OK] First LOG inside of MAIN function")

    asyncAwait()

    //5
    console.log("05 - [OK] function asyncAwait() called.")

    myPromise.then(() => {
        console.log("11 - [OK] LOG from myPromise.then ")
    }).catch((e)=>{
        console.log(" ERROR - INSIDE CATCH: " + e)
    })
    
    //6
    console.log("06 - [OK] Just started the Promise ")

    //again
    asyncAwait()

    //7
    console.log("07 - [OK] asyncAwait called AGAIN")
}

learningPromises();



async function asyncAwait(){
    const result = await myPromise

    if(GLOBAL_VAR == 0){
        console.log("09 - [OK] asyncAwait return of [05]")
        console.log(result)
    }else{
        console.log("12 - [OK] asyncAwait return of [07]")
        console.log(result)
        console.log("14 - [OK] LAST LOG, Thank you! by @jonass_flores")
    }

    GLOBAL_VAR += 1
}
