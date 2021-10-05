function explain_callback(name, age, task){
    task();
    console.log('Hello', name);
    console.log('your age ', age)
    
}

function washHand(){
    console.log('Wash your hand with soap');
}

function takeShower(){
    console.log('Take shower');
}

explain_callback('Ashik', 26, washHand);
explain_callback('Ashik Das', 26, takeShower);