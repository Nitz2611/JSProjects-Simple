const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }
    else{
        const Bmi = (weight / ((height * height)/10000)).toFixed(2)
        //show the results
        results.innerHTML = `<span>${Bmi}</span>`;
        const guide = document.querySelector("#Guide")
    
    if(Bmi < 18.6){
        guide.innerHTML = `<span>You are Under Weight</span>`;
    }else if(Bmi >= 18.6 && Bmi <= 24.9){
        guide.innerHTML = `<span>You are in normal range</span>`;
    }else{
        guide.innerHTML = `<span>You are over weight</span>`;
    }
    }

    

})