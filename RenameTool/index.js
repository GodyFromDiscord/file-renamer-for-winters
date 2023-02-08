const path = require('path')
const fs = require('fs')
const { rename } = require('fs')
var count = 0

fs.readdir('./files', function(err, files){

    if(err){
        return console.log('Unable to scan directory')
    }

    files.forEach(function(file){
        count++

        console.log(count - 1)

        rename(`./files/${file}`, `${count - 1}.ytd`, (err) => {
            if (err) throw err;
            console.log('Rename Complete')
        })
    })
})