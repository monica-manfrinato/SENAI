import express from "express"

const app = express()

app.use(express.json())

const livros = [
    {
        isbn:1,
        titulo_livro:"Java - Como programar",
        editora:"Saber",
        ano_publicacao:"2002"
    },
    {
        isbn:2,
        titulo_livro:"Java - Como programar de verdade",
        editora:"Saber",
        ano_publicacao:"2008"
    }
]

const exemplar = [
    {
        idExemplar:101,
        isbn:1,
        satusExemplar: "Emprestado"
    },
    {
        idExemplar:102,
        isbn:2,
        satusExemplar: "Disponível"
    }
]

const membro = [
    {
        idMatricula: 2215,
        nomeCompleto: "Mônica Cotrim Manfrinato",
        endereco:"Rua dos pintados 77",
        telefoneContato: "11912345-5432"
    },
    {
        idMatricula: 2214,
        nomeCompleto: "Letícia Robertinha",
        endereco:"Rua das Carpas 123",
        telefoneContato: "11912345-9876"
    }
]

const autor = [
    {
        idAutor:123,
        nomeAutor:"Heloísa Gabrielly Paixão",
        nacionalidade: "Coreana"
    },
    {
        idAutor:456,
        nomeAutor:"Paula Sbrissa Gianotto",
        nacionalidade: "Chinesa"
    }
]

const autorLivro = [
    {
        idAutorLivro:10012,
        idAutor:123,
        isbn:1
    },
    {
        idAutorLivro:10013,
        idAutor:456,
        isbn:2
    }
]

const emprestimo = [
    {
        idEmprestimo:10092,
        idExemplar:101,
        idMatricula:2215,
        dataEmprestimo:"2024-12-23",
        previsaoDevolucao: "2024-12-30",
        dataDevolucao: "2024-12-29"
    },
    {
        idEmprestimo:10092,
        idExemplar:101,
        idMatricula:2215,
        dataEmprestimo:"2024-12-23",
        previsaoDevolucao: "2024-12-30",
        dataDevolucao: "2024-12-29"
    }
]

app.get("/", (req,res) => {
    res.status(200).send("Livraria Saber e Cia")
})


//////////////FUNÇÕES LIVRO////////////////////////
function buscarLivro(isbn){
    return livros.findIndex(livro => {
        return livro.isbn === Number(isbn)
    })
}

app.get("/livros", (req,res) => {
    res.status(200).json(livros)
})

app.get("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    res.status(200).json(livros[index])
})

app.post("/livros", (req,res) => {
    livros.push(req.body)
    res.status(201).json(req.body)
})

app.put("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)

    livros[index].titulo_livro = req.body.titulo_livro
    livros[index].editora = req.body.editora
    livros[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(livros[index])
})

app.delete("/livros/:isbn", (req,res) =>{
    const index = buscarLivro(req.params.isbn)
    livros.splice(index, 1)
    res.status(200).json(livros)
})



//////////////FUNÇÕES AUTOR////////////////////////
function buscarAutor(idAutor){
    return autor.findIndex(bAutor => {
        return bAutor.idAutor === Number(idAutor)
    })
}


app.get("/autor", (req,res) => {
    res.status(200).json(autor)
})

app.get("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.idAutor)
    res.status(200).json(autor[index])
})

app.post("/autor", (req,res) => {
    autor.push(req.body)
    res.status(201).json(req.body)
})

app.put("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.isbn)

    autor[index].nomeAutor = req.body.nomeAutor
    autor[index].nacionalidade = req.body.nacionalidade

    res.status(200).json(autor[index])
})

app.delete("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.idAutor)
    autor.splice(index, 1)
    res.status(200).json(autor)
})

//////////////FUNÇÕES EXEMPLAR////////////////////////
function buscarExemplar(idExemplar){
    return autor.findIndex(bExemplar => {
        return bExemplar.idEmprestimo === Number(idExemplar)
    })
}


app.get("/exemplar", (req,res) => {
    res.status(200).json(exemplar)
})

app.get("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.idAutor)
    res.status(200).json(autor[index])
})

app.post("/autor", (req,res) => {
    autor.push(req.body)
    res.status(201).json(req.body)
})

app.put("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.isbn)

    autor[index].nomeAutor = req.body.nomeAutor
    autor[index].nacionalidade = req.body.nacionalidade

    res.status(200).json(autor[index])
})

app.delete("/autor/:idAutor", (req,res) =>{
    const index = buscarAutor(req.params.idAutor)
    autor.splice(index, 1)
    res.status(200).json(autor)
})


export default app