/**
 * Created by hy on 16-5-22.
 */

// 本功能是实现查找HTML源码中标签的文字（文字跨标签），并对文字加a标签

console.log("ok");

var str =
    '<div>' +
        '<span>天</span>' +
        '<span>天</span>' +
    '</div>' +
    '::<div>' +
        '<span>向上</span>' +
        '<span>是</span>' +
    '</div>' +
    '<span>个</span>' +
    '<span>好看的</span>' +
    '<span>节目</span>';

// var strUserWord = '天';
// var strUserWord = '天天';
// var strUserWord = '向上';
// var strUserWord = '天天向上';
// var strUserWord = '天向上';
// var strUserWord = '天向上个';
var strUserWord = '天向上是个';
// var strUserWord = '是个好看';
// var strUserWord = '节目';


var usrWordArr = strUserWord.split("");

// // 不去重
var usrWordArr2 = usrWordArr;

// 正则
// var usrWordRe = usrWordArr.join(".*?:*?.*?");
// var usrWordRe = usrWordArr.join("w*?:*?w*?");
var usrWordRe = usrWordArr.join("[^\u4e00-\u9fa5]*?:*?[^\u4e00-\u9fa5]*?");

var matchStrArr = str.match(usrWordRe);
// str.match(usrWordRe);

// if (matchStrArr.length == 0){
//     return;
// }


var usrWordArr3 = [];
usrWordArr2.map(function (_) {
    usrWordArr3.push('<a>' + _ + '</a>');
});

// var usrWordArr3 = usrWordArr2.every(function () {
//     '<$$$>' + this + '</$$$>';
// });


var matchStr2Arr = matchStrArr;
var matchStr3Arr = [];

matchStr2Arr.map(function (_) {
    for(var i=0; i < usrWordArr.length; i++){
        // 判断是否已经标记过了
        _ = _.replace(new RegExp(usrWordArr[i], 'gm'), usrWordArr3[i]);
    }
    matchStr3Arr.push(_);
});

// for (a_rr in matchStr2Arr){
//
// }


var resStr = str;

for (var i=0; i < matchStrArr.length; i++){
    // resStr = resStr.replace('/' + matchStrArr[i] + '/g', matchStr3Arr[i]);
    resStr = resStr.replace(new RegExp(matchStrArr[i], 'gm'), matchStr3Arr[i]);
}

// var resStr = str.replace(matchStr, matchStr2);





