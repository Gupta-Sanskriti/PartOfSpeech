
const pos = require('parts-of-speech');
// const chunker = require('pos-chunker');

// part of speech detector
const words = new pos.Lexer().lex(fileinfo);
console.log(pos)
let tags = new pos.Tagger().tag(words).map(function(tag){return tag[0] + '/' + tag[1];}).join(' ');

console.log(tags)


// let places = chunker.chunk(tags, '[{ tag: NNP }]');

// Best/JJS place/NN to/TO live/VB in/IN {California/NNP} ./.
// let verbs = chunker.chunk(tags, '[{ tag: VB }]');
// console.log(verbs)