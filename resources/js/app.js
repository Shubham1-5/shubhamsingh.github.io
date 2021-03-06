var botui = new BotUI('my-bot');

botui.message.bot({
    delay: 500,
    loading: true,
    content: 'Hi There! ð'
}).then(function () {
    botui.message.bot({
        delay: 1000,
        loading: true,
        content: "My name is Shubham Singh and I'm from India ð®ð³"
    }).then(function () {
        botui.message.bot({
            delay: 1000,
            loading: true,
            content: '..and I look weird as this ð¤![my-image](./resources/images/shubham.jpg)'
        }).then(function () {
            botui.message.bot({
                delay: 1000,
                loading: true,
                content: "I'm a software engineer with 3 years of experience"
            }).then(function () {
                botui.message.human({
                    delay: 1000,
                    loading: true,
                    content: "Woah! 3+ Years... that's awesome ð²"
                }).then(function () {
                    botui.message.bot({
                        delay: 1000,
                        loading: true,
                        content: "Yup! I am also interested in mentoring juniors for Gate Exam (All India 3rd toughest entrance exam) ð"
                    }).then(function () {
                        botui.message.bot({
                            delay: 1000,
                            loading: true,
                            content: "So... I'm a also a Mentor at my part time ð"
                        }).then(function () {
                            botui.message.human({
                                delay: 1000,
                                loading: true,
                                content: "Impressive ð What else you like to do ?"
                            }).then(function () {
                                botui.message.bot({
                                    delay: 1000,
                                    loading: true,
                                    content: "I like to program cool things ð¨âð»like this bot ð¤ and..."
                                }).then(function () {
                                    botui.message.bot({
                                        delay: 1000,
                                        loading: true,
                                        content: "love to play Cricket ð and do Swimming ðâ"
                                    }).then(function () {
                                        botui.message.human({
                                            delay: 1000,
                                            loading: true,
                                            content: "Great! You seem to be a cool guy ð but how can I contact you ?"
                                        }).then(function () {
                                            botui.message.bot({
                                                delay: 1000,
                                                loading: true,
                                                content: "Sure! You can !(phone) on [8981188387](tel:+918981188387)"
                                            })
                                            botui.message.bot({
                                                delay: 1500,
                                                content: "!(envelope) me at [singh.shbhm90@gmail.com](mailto:singh.shbhm90@gmail.com)^"
                                            })
                                            botui.message.bot({
                                                delay: 2000,
                                                content: "or you can connect with me on !(linkedin-square) ð [here](https://www.linkedin.com/in/shubham-singh-38b650126/)^"
                                            }).then(function () {
                                                botui.message.human({
                                                    delay: 1000,
                                                    loading: true,
                                                    content: "Perfect! ð"
                                                }).then(function () {
                                                    botui.message.bot({
                                                        delay: 1000,
                                                        loading: true,
                                                        content: "Looking forward to hearing from you soon ð"
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