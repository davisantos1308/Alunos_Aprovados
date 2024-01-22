//Filtrando alunos por reporovado e aprovados

/*const alunos  = ['Davi', 'Manse', 'Felps', 'Everton', 'Alisson']
const notas = [7, 10, 6, 8, 7]

const reprovados = alunos.filter((aluno, posicao) => {
    return notas[posicao] < 7
})

console.log(reprovados)*/

//distinguir quem foi aprovado de ano ou não

const alunos = []
const media = []

const alunos_E_Medias = [alunos, media]

const btnConfirmar = document.querySelector('#confirmar__Aluno')

btnConfirmar.addEventListener('click', () => {

    const nomeAluno = document.querySelector('#nome__Aluno').value
    const strMediaAluno = document.querySelector('#media__Aluno')
    const nbrMediaAluno = Number(strMediaAluno.value)

    if(nbrMediaAluno > 10 || nomeAluno.length < 2 || alunos_E_Medias[0].includes(nomeAluno)){
        window.alert('Por favor, revise os dados digitados!')
    } 
    //Não é possível adicionar nota maior que 10
    //Não é possível colocar nome com menos de 2 cartacteres
    //Não é possível colocar nomes que já existem

    else{
        alunos.push(nomeAluno)
        media.push(nbrMediaAluno)

        window.alert('Aluno adicionado com êxito!')
    }
})

//======================== Lado direito da tela ===========================
//--------------------------- Remover aluno -------------------------------
const removerAluno = document.querySelector('#apagar__Aluno')

removerAluno.addEventListener('click', () => {
    alunos.pop()
    media.pop()

    window.alert('Aluno excluído com sucesso!')
})

//--------------------------- Mostrar lista ------------------------------
const mostrarLista = document.querySelector('#exibir__Lista')

mostrarLista.addEventListener('click', () => {

    const lista = document.getElementsByTagName('p')[0]
    const titulo = document.getElementsByTagName('h1')[0]


    lista.innerHTML = ''

    alunos.forEach((nome) => {

        titulo.innerHTML = 'LISTA DE ALUNOS'
        lista.innerHTML += `${nome}<br>`
    })
})

//------------------ Mostrar alunos que foram aprovados ------------------

const mostrarAprovados = document.querySelector('#alunos__Aprovados')

mostrarAprovados.addEventListener('click', () => {

    const alunosAprovados = alunos.filter((_, posicao) => {
        return media[posicao] > 5
    })

    const titulo = document.getElementsByTagName('h1')[0]
    const lista = document.getElementsByTagName('p')[0]

    lista.innerHTML = ''
    titulo.innerHTML = 'LISTA DE ALUNOS APROVADOS'

    alunosAprovados.forEach((nome) => {

        lista.innerHTML += `${nome}<br>`
    })
})