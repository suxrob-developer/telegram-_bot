const Name = document.querySelector('#name')
const Number = document.querySelector('#number')
const Message = document.querySelector('#message')

function SandMessage(){

    let date = new Date()

        if(Name.value === '' || Number.value === '' || Message.value === '' ){
        alert("Ma'lumotlarni to'liq kiriting!")
        }
    else{

        const  token = '6972742642:AAHwBXRWPCouyGdelcef7yMtQcy9_NxPJXc'
        const chat_id = -1002123830195
        let my_text =`
        %0A👦🏼 Name: ${Name.value}
        %0A📞  Phone: ${Number.value}
        %0A✍️ Message: ${Message.value}
        %0A🕓 Time: ${date.getHours()}:${date.getMinutes()}
        `
            let url =   `https://api.telegram.org/bot6972742642:AAHwBXRWPCouyGdelcef7yMtQcy9_NxPJXc/sendMessage?chat_id=${chat_id}&text=${my_text}&pars_mode=html`

            let api = new XMLHttpRequest();
            api. open('GET',url,true);
            api. send();

            alert("Xabar yuborildi")

            Name.value = ''
            Number.value = ''
            Message.value = ''
    }
}    