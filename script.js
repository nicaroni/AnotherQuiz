const quizData = [
    {
        question: "Since last check, whose's the character that Dimitar prefer to play on LOL ?",
        a: 'Irelia',
        b: 'Fiora',
        c: 'Shen',
        d: 'nekoi zver',
        correct: 'b'
    },
    {
        question:"Which English city is known as the Steel City?",
    a: 'Burgas jelezniq',
    b: 'Dragalevci',
    c: 'Sheffield',
    d: 'New York',
    correct: 'c'
    },
    {
        question:"What does CIA stand for?",
    a: 'Civilni imat attitude',
    b: 'Central Intelligence Agency',
    c: 'Centralite Imat administraciq ',
    d: 'nishto',
    correct: 'b'
    },{
        question:"What is 'cynophobia'?",
    a: 'fear of food',
    b: 'fear of love',
    c: 'fear of dogs',
    d: 'nmz',
    correct: 'c'
    },
    {
        question:"Zashto Dimitar se qdosva kogato e razhvurleno vkushti?",
    a: 'bez prichina, tursi si povod da se skara',
    b: 'zashtoto opraveniq dom e edno ot neshtata vajni za nego',
    c: 'ne obicha da zavijda bubolechki :X',
    d: 'povod za seks sled skarvane',
    correct: 'b'
    
    },
    {
        question:"AKo Veronica poddurja 24/7 chisto vkushti, kak shte q vuznagradi Dimitar?",
    a: 'Mac za 20 999 $',
    b: 'vkusna topla hrana s movie vecher',
    c: 'malko keksu ;#',
    d: '"b" i "c"',
    correct: 'd'
    
    },
    {
        question:"Zashto chervenokosite jeni sa po-strastni v legloto ",
    a: 'nema qsna prichina',
    b: 'jena li e vsichko obicha',
    c: 'shtot si im platil pricheskata ot 200lv',
    d: 'Zashtoto ako e rujdiv pokrivut, v mazeto vinagi e mokro!',
    correct: 'd'
    
    },
    {
        question:"What do you call the wife of a hippie?",
    a: 'jina mu',
    b: 'Missu',
    c: 'A Mississippi!',
    d: 'nmz',
    correct: 'c'
    
    },
    {
        question:"Poluchi li i se na Veronica tozi quiz?",
    a: 'malku ne',
    b: 'abe vij tam che raboti',
    c: 'az sum dobur mujo i mi haresa :))))',
    d: 'vnimavai kakvo shte izberesh!!',
    correct: 'c'
    
    },
    {
        question:"Kak mu se kazva na edin Dimitur koito obicha edna Veronica",
    a: 'shtastlivec, zashoto tq go obicha, chisti, gotvi i podrejda',
    b: 'nema takuv',
    c: 'less sex more stress i mnogo vino s lubov',
    d: 'strah me e da otgovorq',
    correct: 'c'
    
    }

]

const input = document.querySelector("input")
const body = document.querySelector("body");

const changeToDarkTheme = () => {
    body.classList.toggle("dark");


};

input.onchange = changeToDarkTheme;

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question');
//?        ------------------------------
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

//?       ----------------------------------------
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

 function loadQuiz() {
    deselectAnswers();

     const currentQuizData = quizData[currentQuiz];

     questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

 }

 function getSelected(){

    let answer = undefined;
    answerEls.forEach((answerEl)=> {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
    //! vrushta a)
 }

 function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });

 }

 submitBtn.addEventListener("click", () =>{

    //?check to see the answers

    const answer = getSelected();

    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length){
            loadQuiz();

        }else{
            
            quiz.innerHTML = `
            
            <p> <span style="color: rgb(87, 80, 80)" style="font-size: small"> <strong> You answered correctly at ${score}/${quizData.length} questions. </strong> </span> </p>
            
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
 });