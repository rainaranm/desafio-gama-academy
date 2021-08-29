const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    sobrenome: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    data: { type: String, unique: false, required: true },
    profissao: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: false },
    qual: { type: String, unique: false, required: false },
    estadoCivil: { type: String, unique: false, required: false },
    email: { type: String, unique: false, required: true },
    telefoneFixo: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);