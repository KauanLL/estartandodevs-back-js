const fs = require('fs');
const https = require('https');

//const linksASync = ['https://wallpapercave.com/wp/wp5722189.jpg', 'https://c4.wallpaperflare.com/wallpaper/302/790/367/nime-overlord-ainz-ooal-gown-hd-wallpaper-preview.jpg', 'https://images2.alphacoders.com/111/111290.jpg', 'https://i.pinimg.com/564x/69/ce/70/69ce70a6b8d21377aaf1d314f2cff85a.jpg', 'https://images.alphacoders.com/735/735490.jpg'];

const dataSync = 'DATA SYNC'
const dataASync = 'DATA ASYNC'

//const stream = fs.createWriteStream(nomeAquiv);

//const linksSync = []

//Ao lidar com arquivos muito grandes, seja em escrita ou leitura
//É aconselhado utilizar a forma assíncrona para não bloquear a aplicação completamente enquanto o arquivo é lido

const createFileASync = () => {
  fs.mkdir('aula-07/use-writeFile-writeFileSync/arquivos-sync', (err) => {
    if (err) {
        return console.error(err);
    }
  })
    //fs.mkdir('arquivos-sync')
    for (var i = 1; i < 6; i++) {
      fs.writeFile(`aula-07/use-writeFile-writeFileSync/arquivos-sync/syncFile${i}.txt`, dataSync, (err) => {
        if (err) throw err;
      });
    }
}

const createFileSync = () => {
    fs.mkdirSync('aula-07/use-writeFile-writeFileSync/arquivos-async')
    for (var i = 1; i < 6; i++) {
        try {
        fs.writeFileSync(`aula-07/use-writeFile-writeFileSync/arquivos-async/asyncFile${i}.txt`, dataASync);
        } catch (err) {
            `Error ${err} -`
        }
    }
}

createFileASync()
createFileSync()