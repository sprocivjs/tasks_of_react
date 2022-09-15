import './index.scss';
import {useState} from "react";

const questions = [
    {
        title: 'React - це ... ?',
        variants: ['бібліотека', 'фреймворк', 'додаток'],
        correct: 0,
    },
    {
        title: 'Компонент - це ... ',
        variants: ['додаток', 'частинка додатку чи сторінки', 'я не знаю що це так ...'],
        correct: 1,
    },
    {
        title: 'Що таке JSX?',
        variants: [
            'Це простий HTML',
            'Це звичана функція',
            'Це той же HTML, але з можливістю виконувати JS-код',
        ],
        correct: 2,
    },
];

function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2>Ви відповіли вірно на {correct} відповідей з {questions.length}</h2>
            <a href={'/'}>
                <button>Пройти опитування ще раз</button>
            </a>
        </div>
    );
}

function Game({step, question, onClickVariant}) {
    const percent = Math.round((step / questions.length) * 100);
    return (
        <>
            <div className="progress">
                <div style={{width: `${percent}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => <li onClick={() => onClickVariant(index)}
                                                               key={text}>{text}</li>)
                }
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

    const onClickVariant = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }
    return (
        <div className="App">
            {
                (step !== questions.length) ? <Game step={step} question={question} onClickVariant={onClickVariant}/> :
                    <Result correct={correct}/>
            }

        </div>
    );
}

export default App;