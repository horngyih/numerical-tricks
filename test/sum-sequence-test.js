const assert = require("assert");
const _sumSequence = require("../src/sum-sequence");

function _generateSequence(n){
    let arr = [];
    if( n ){
        for( let i = 1; i <= n; i++ ){
            arr.push(i);
        }
    }
    return arr;
}

function _sum( arr ){
    arr = (Array.isArray(arr))?arr:[];
    return arr.reduce( (sum,i)=>sum+i, 0);
}

function test(seqLength){
    describe( `Sum 1...${seqLength}`, ()=>{
        let sum = _sum(_generateSequence(seqLength));
        let sequenceSum = _sumSequence(seqLength);
        it(`should return the expected sum ${sum} -> sequence sum ${sequenceSum}`, ()=>{
            assert.equal(sum, sequenceSum);
        });
    });
}

let testCases = [];
testCases.push(10);
testCases.push(11);
testCases.push(100);
testCases.push(199);
testCases.push(209);
for( let i = 0; i < 10; i++ ){
    testCases.push( parseInt( Math.random() * 1000 ) );
}

describe( "Test Sum Sequence", ()=>{
testCases.forEach( i=>test(i) );
});
