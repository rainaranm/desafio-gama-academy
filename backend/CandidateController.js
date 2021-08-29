const Candidate = require('./Candidate');


module.exports = {
    async register(req, res) {

        const { email, genero, nome, cep, sobrenome, cpf, data, profissao, telefoneFixo, celular, logradouro, numero, bairro, cidade, estado, veiculo, habilitacao, qual } = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.nome = nome;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.sobrenome = sobrenome;
        newCandidate.cpf = cpf;
        newCandidate.data = data;
        newCandidate.profissao = profissao;
        newCandidate.telefoneFixo = telefoneFixo;
        newCandidate.celular = celular;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;
        newCandidate.qual = qual;

        const CandidateExists = await Candidate.exists({ cpf: req.body.cpf })

        if (CandidateExists) {
            return res.status(409).json({ msg: 'Usuário já existente!' });
        }

        const user = await Candidate.create(req.body);
        return res.json(user);


    }
}