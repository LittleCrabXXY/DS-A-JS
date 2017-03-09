/**
 * 为影碟租赁程序创建一个checkin()函数，当客户归还一部影片时，将该影片从已租列表中删除，同时添加到现有影片列表中。
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

function checkin(available, rent, line) {
    if (rent.search(line) === -1) {
        console.log('[error] ' + line + ' is not in rent list');
    } else {
        available.append(line);
        rent.remove(line);
        console.log('[info] ' + line + ' is returned');
    }
}

var movieList = readList('./Ch3-List/movies.txt');
var rentList = new List();
var flag = true;    // default 'rent'
console.log('===== rent or return? =====\n===== (enter \'exit\' to quit) =====');
rl.on('line', function(line) {
    switch (line) {
        case 'exit':
            rl.close();
            return;
            /* without break */
        case 'rent':
            flag = true;
            console.info('===== movies now available (' + movieList.values.length + ') =====');
            showMovies(movieList);
            console.info('====== which movie would you like? ======');
            break;
        case 'return':
            flag = false;
            console.info('====== which movie do you want to return? ======');
            break;
        default:
            if (flag) {
                checkout(movieList, rentList, line);
                console.info('===== movies now rented out =====');
                showMovies(rentList);
            } else {
                checkin(movieList, rentList, line);
            }
            console.log('===== rent or return? =====\n===== (enter \'exit\' to quit) =====');
    }
});