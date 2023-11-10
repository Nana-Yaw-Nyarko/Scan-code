let app = Vue.createApp({
    data() {
        return{
            showContents:true,
            contents: [
                {
                    image: 'images/image-qr-code.png',
                    text: 'Improve your front-end skills by building projects',
                    message: 'Scan the QR code to visit frontend masters and take your coding skill to the next level',
                }   
            ]
        } 
    },

})



// const app = Vue.createApp({
//     data() {
//         return {
//             text: 'Improve your front-end skills by building project',
//             message: 'Scan the QR code to visit front-end masters and take your coding skill to the next level',
//         }
//     }
// })

app.mount('#app')