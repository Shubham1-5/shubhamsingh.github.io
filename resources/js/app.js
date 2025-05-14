var botui = new BotUI('my-bot');

botui.message.bot({
    delay: 500,
    loading: true,
    content: 'Hi There! 🖐'
}).then(function () {
    botui.message.bot({
        delay: 1000,
        loading: true,
        content: "My name is Shubham Singh and I'm from India 🇮🇳"
    }).then(function () {
        botui.message.bot({
            delay: 1000,
            loading: true,
            content: '..and I look as weird as this 🤓![my-image](./resources/images/shubham.jpg)'
        }).then(function () {
            botui.message.bot({
                delay: 1000,
                loading: true,
                content: "I'm a Senior Software Engineer at Visa with 6+ years of experience"
            }).then(function () {
                botui.message.human({
                    delay: 1000,
                    loading: true,
                    content: "Woah! 6+ Years... that's awesome 😲"
                }).then(function () {
                    botui.message.bot({
                        delay: 1000,
                        loading: true,
                        content: "Yup! I am also interested in mentoring juniors for the Gate Exam (the 3rd toughest entrance exam in India). 📖"
                    }).then(function () {
                        botui.message.bot({
                            delay: 1000,
                            loading: true,
                            content: "So... I'm also a mentor in my free time. 🎓"
                        }).then(function () {
                            botui.message.human({
                                delay: 1000,
                                loading: true,
                                content: "Impressive 👏 What else do you like to do?"
                            }).then(function () {
                                botui.message.bot({
                                    delay: 1000,
                                    loading: true,
                                    content: "I like to program cool things 👨‍💻 like this bot 🤖, and..."
                                }).then(function () {
                                    botui.message.bot({
                                        delay: 1000,
                                        loading: true,
                                        content: "also love to play Cricket 🏏 and swim 🏊‍"
                                    }).then(function () {
                                        botui.message.human({
                                            delay: 1000,
                                            loading: true,
                                            content: "Great! You seem to be a cool guy 👌, but how can I contact you?"
                                        }).then(function () {
                                            botui.message.bot({
                                                delay: 1000,
                                                loading: true,
                                                content: "Sure! You can !(envelope) me at [singh.shbhm90@gmail.com](mailto:singh.shbhm90@gmail.com)^"
                                            })
                                            botui.message.bot({
                                                delay: 1500,
                                                content: "OR you can connect with me on !(linkedin-square) 👉 [here](https://www.linkedin.com/in/shubham-singh-38b650126/)^"
                                            }).then(function () {
                                                botui.message.human({
                                                    delay: 1000,
                                                    loading: true,
                                                    content: "Perfect! 👍"
                                                }).then(function () {
                                                    botui.message.bot({
                                                        delay: 1000,
                                                        loading: true,
                                                        content: "Looking forward to hearing from you soon 🙂"
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
