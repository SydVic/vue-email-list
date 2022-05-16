const app = new Vue (
    {
        el: "#root",
        data: {
            emailsArray: [],
            arrayLength: 10,
            email: "",
        },
        methods: { 
            getEmails() {
                for (let i = 0; i < this.arrayLength; i++) {
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        this.emailArray.push(resp.data.response);
                    });
                }
            }
        },
        mounted() {
            this.getEmails();
        },
    }
);

// correzione
// const app = new Vue (
//     {
//         el: "#root",
//         data: {
//             emailsArray: [],
//         },
//         methods: { 
            
//         },
//         created() {
//             for (let i = 0; i < 10; i++) {
//                 axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//                 .then((resp) => {
//                     const newEmail = resp.data.response;
//                     this.emailsArray.push(newEmail);
//                 });
//             }
//         }
//     }
// );
// ciclo while non va bene, per la questione asincronicità. Prima che arrivi la risposta vengono eseguiti X cicli