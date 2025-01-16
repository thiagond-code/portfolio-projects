const main = document.getElementById('main')
const form = document.getElementById('form')
const fieldset = document.getElementById('fieldset')
const scoreSpan = document.getElementById('score')

const test = [
    {
        question: 'Qual é o maior rio do mundo em volume de água?',
        options: ['a) Amazonas', 'b) Nilo', 'c) Mississipi', 'd) Yangtsé'],
        answer: 'a) Amazonas'
    },
    {
        question: 'Qual é a unidade de medida da força no Sistema Internacional de Unidades?',
        options: ['a) Joule', 'b) Watt', 'c) Newton', 'd) Pascal'],
        answer: 'c) Newton'
    },    
    {
        question: 'O que são os cloroplastos nas células vegetais?',
        options: ['a) Organelas responsáveis pela produção de energia', 'b) Organelas responsáveis pela fotossíntese', 'c) Organelas responsáveis pela digestão celular', 'd) Organelas responsáveis pela defesa contra vírus'],
        answer: 'b) Organelas responsáveis pela fotossíntese'
    },
]

test.forEach((query) => {
    
    // Creates a paragraph for each of the questions text
    const questionText = document.createElement("p")
    questionText.textContent = query.question
    fieldset.appendChild(questionText)
    
    query.options.forEach((option) => {
        // Sets the option elements of the questions
        const label = document.createElement('label')
        const input = document.createElement('input')

        input.type = 'radio'
        input.name = `${query.question}`
        input.value = option
        
        label.appendChild(input)
        label.appendChild(document.createTextNode(option))
        fieldset.appendChild(label)
        fieldset.appendChild(document.createElement('br'))
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let score = 0;

    test.forEach((query) => {
        const selectedOption = document.querySelector(`input[name="${query.question}"]:checked`)
        if (selectedOption && selectedOption.value === query.answer) {
            score++
        }
    })

    scoreSpan.textContent = `Você acertou ${score} de ${test.length} perguntas!`
})