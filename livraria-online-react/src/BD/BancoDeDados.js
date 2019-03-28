const PRODUTOS = [
    {nome: 'Medicina de emergência: Abordagem Prática (Português)', preco: 197, imagem: "https://images-na.ssl-images-amazon.com/images/I/51B8SKHq3jL._SX354_BO1,204,203,200_.jpg"},
    {nome: 'Manual da residência de medicina intensiva (Português)', preco: 76, imagem: "https://images-na.ssl-images-amazon.com/images/I/41lK94hR1cL._AC_UL160_SR160,160_.jpg"},
    {nome: 'FInterpretação Rápida do ECG. Um Novo e Simples Método Para Leitura Sistemática dos Eletrocardiogramaonte', preco: 59.70, imagem: "https://images-na.ssl-images-amazon.com/images/I/51XmTRVirhL._AC_UL320_SR232,320_.jpg"},
    {nome: 'Informática Para Concursos: teoria e mais de 350 questões', preco: 71.28, imagem: "https://m.media-amazon.com/images/I/91I2dMO-VZL._AC_UL436_.jpg"},
    {nome: 'Informática Para Concursos. Manual Completo', preco: 71.44, imagem: "https://m.media-amazon.com/images/I/41JaAgkYR2L._AC_UL436_.jpg"},
    {nome: 'Informática', preco: 81, imagem: "https://m.media-amazon.com/images/I/61AemWOw1kL._AC_UL436_.jpg"},
    {nome: 'As Tecnologias da Inteligência: o futuro do pensamento na era da informática', preco: 38.80, imagem: "https://m.media-amazon.com/images/I/61mW9SxUGhL._AC_UL436_.jpghttps://images-americanas.b2w.io/produtos/01/00/item/130321/1/130321195_1GG.jpg"},
    {nome: 'JavaScript and HTML5 Now (English Edition)', preco: 16, imagem: "https://m.media-amazon.com/images/I/91e6E7yZZdL._AC_UL436_.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;