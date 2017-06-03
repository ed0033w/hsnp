var article = new Vue({
  el: '#article',
  data: {
    questionCards: [{ 
        img: 'math.png',
        date: '2017/3/24',
        subject: '數學',
        range: '高二 三角函數',
        question_text: '我不能理解第三行算式為什麼會產生cot，還有最後為什麼要取那樣的值？',

    }, { 
        img: 'math.png',
        date: '2017/3/22',
        subject: '英文', 
        range: '高二 過去式文法',
        question_text: '我不能理解第三行算式為什麼會產生cot，還有最後為什麼要取那樣的值？',
    },{ 
        img: 'math.png',
        date: '2017/3/11',
        subject: '國文',
        range: '高二 文言文',
        question_text: '我不能理解第三行算式為什麼會產生cot，還有最後為什麼要取那樣的值？',
    }]
  }
})