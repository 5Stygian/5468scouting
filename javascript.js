document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    const minusButton  = document.getElementById("minusL1");
    const plusButton   = document.getElementById("plusL1");
    const counterDiv   = document.getElementById("cvL1");
    let count1         = 0;
    
    const minusButton2 = document.getElementById("minusL2");
    const plusButton2  = document.getElementById("plusL2");
    const counterDiv2  = document.getElementById("cvL2");
    let count2         = 0;
    
    const minusButton3 = document.getElementById("minusL3");
    const plusButton3  = document.getElementById("plusL3");
    const counterDiv3  = document.getElementById("cvL3");
    let count3         = 0;
    
    const minusButton4 = document.getElementById("minusL4");
    const plusButton4  = document.getElementById("plusL4");
    const counterDiv4  = document.getElementById("cvL4"); 
    let count4         = 0;
    
    minusButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (count1 > 0){
            count1--;
        }
        counterDiv.innerHTML = count1;
        console.log(count1);
    });
    
    plusButton.addEventListener("click", (event) => {
        event.preventDefault();
        count1++;
        counterDiv.innerHTML = count1;
        console.log(count1);
    });
    
    plusButton2.addEventListener("click", (event) => {
        event.preventDefault();
        count2++;
        counterDiv2.innerHTML = count2;
    });
    
    minusButton2.addEventListener("click", (event) => {
        event.preventDefault();
        if (count2 > 0){
            count2--;
        }
        counterDiv2.innerHTML = count2;
    });
    
    plusButton3.addEventListener("click", (event) => {
        event.preventDefault();
        count3++;
        counterDiv3.innerHTML = count3;
    });
    
    minusButton3.addEventListener("click", (event) => {
        event.preventDefault();
        if (count3 > 0){
            count3--;
        }
        counterDiv3.innerHTML = count3;
    });

    plusButton4.addEventListener("click", (event) => {
        event.preventDefault();
        count4++;
        counterDiv3.innerHTML = count4;
    });
    
    minusButton4.addEventListener("click", (event) => {
        event.preventDefault();
        if (count4 > 0){
            count4--;
        }
        counterDiv3.innerHTML = count4;
    });


});

// nerd shi frfr
