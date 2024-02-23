let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let heading = document.querySelector(".heading");
let img = document.querySelector(".img");

//if no
var count = 0;
if (count == 0) {
    no.addEventListener("click", (clicked) => {
        yes.style.padding = "40px";
        no.style.padding = "20px";
        img.style.top = -34 + "px";
        no.innerHTML = "No,sure!";
        count = 1;
        if (count == 1) {
            no.addEventListener("click", (clicked) => {
                yes.style.padding = "80px";
                no.style.padding = "15px";
                img.style.top = -34 + "px";
                no.innerHTML = "No, sorry";
                count = 2;
            

                if (count == 2) {
                    no.addEventListener("click", (clicked) => {
                        yes.style.padding = "120px";
                        no.style.padding = "5px";
                        no.innerHTML = "Sorry";
                        count = 3;

                        if (count == 3) {
                            no.addEventListener("click", (clicked) => {
                                yes.style.padding = "250px";
                                no.style.padding = "3px";                               
                                no.innerHTML = "Sorry yaar!!!";
                                count = 4;

                                if (count == 4) {
                                    no.addEventListener("click", (clicked) => {
                                        yes.style.padding = "5550px";
                                        no.style.padding = "2px";
                                        //heading.style.paddingBottom="20px"
                                        no.innerHTML = "No..";
                                        count = 5;

                                        if (count == 5) {
                                            no.addEventListener("click", (clicked) => {
                                                yes.style.padding = "400px";
                                                no.style.padding = "1px";
                                                
                                                no.innerHTML = "No way";
                                                count = 6;
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }

            })

        }
    });
}

//if yes
yes.addEventListener("click", ()=> {
    document.querySelector(".yeah").style.display = "block";
    document.querySelector(".yeahTxt").style.display = "block";
    document.querySelector(".msg").style.display = "block";
    document.querySelector(".img").style.display = "none";
    document.querySelector(".choice").style.display = "none";
})
