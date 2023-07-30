let qrText=document.getElementById("qrText");
let qrImage=document.getElementById("qrImage");
// by get element by id we get the entire element
let imgBox=document.getElementById("imgbox");



function Generate_qr(){
    if(qrText.value.length > 0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
     imgBox.classList+
     dd("show_img");
   
    }
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }

}

let generateButton = document.querySelector("button");
    generateButton.addEventListener("click", Generate_qr());