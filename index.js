const fs = require('fs');
const archiver = require('archiver');
const extract = require('extract-zip');


//fornecendo a opção, caminho de destino e origem dos arquivos



const tipo = process.argv[2];
const origem = process.argv[3];
const destino = process.argv[4];

if(process.argv.length < 5) {
  console.log("Forneça do dados assim node nome do arquivo caminho1 e caminho2");
  process.exit(-1);
}

//Faz a compactacao do arquivo fornecido
if(tipo == 'compactacao'){
  var saida = fs.createWriteStream(destino);
  var compactador = archiver('zip');

  saida.on('close',()=>{
      console.log(compactador.pointer()+ 'bytes totais')
  });


  compactador.pipe(saida);
  compactador.directory(origem, destino);
  compactador.finalize();

}// Faz a descompactacao do arquivo fonecido
else if( tipo == 'descompactacao'){
  extract(origem,{dir: destino}, function (err) {

});
}
