/**
 * 修改本章的影碟租赁程序，当一部影片检出后，将其加入一个已租影片列表。
 * 每当有客户检出一部影片，都显示该列表中的内容。
 */

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});
var List = require('./List.js');

function readList(filepath) {
    var tmpList = new List();
    var data = fs.readFileSync(filepath, 'utf-8');
    data = data.split('\r\n');
    for (var i=0; i<data.length; i++) {
        tmpList.append(data[i]);
    }
    return tmpList;
}

function showMovies(list) {
    for (var i=0; i<list.values.length; i++) {
        console.log(list.values[i]);
    }
}

function checkout(available, rent, line) {
    if (available.search(line) === -1) {
        console.log('[info] ' + line + ' is not available');
    } else {
        rent.append(line);
        available.remove(line);
        console.log('[info] ' + line + ' is available');
    }
}

var movieList = readList('./Ch3-List/movies.txt');
var rentList = new List();
console.info('===== movies now available =====');
showMovies(movieList);
console.info('====== which movie would you like? ======\n===== (enter \'exit\' to quit) =====');
rl.on('line', function(line) {
    if (line === 'exit') {
        rl.close();
        return;
    }
    checkout(movieList, rentList, line);
    console.info('===== movies now rented out =====');
    showMovies(rentList);
    console.info('===== movies now available =====');
    showMovies(movieList);
    console.info('====== which movie would you like? ======\n===== (enter \'exit\' to quit) =====');
});