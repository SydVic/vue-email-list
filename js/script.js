const app = new Vue (
    {
        el: "#root",
        data: {
            emailArray: [],
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
        }
    }
);