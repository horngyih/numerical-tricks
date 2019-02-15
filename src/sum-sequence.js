// Calculate the sum of a contiguous sequence of number beginning from 1 to seqLength
//
// The method relies on the fact that there are at least n/2 components of the first and last element summed moving inwards
// that sums to the same number
// eg,
// 1     2     3     4
// |     |     |     |
// |     +--+--+     |
// |        |        |
// |        5        |
// +--------+--------+
//          |
//          5
// sum of [1...4] = 5 + 5 = 10
//
// For odd numbered sequences, there is a remainder which is the median of the sequence
// 1     2     3     4     5
// |     |     |     |     |
// |     |     3     |     |
// |     +-----+-----|     |
// |           |           |
// |           5           |
// +-----------+-----------|
//             |
//             5
// sum of [1...5] = 5 +5 + 3 = 13
//
// This can be distilled to the numerical method of,
//
// sum of s given sequence [1...n] where the numbers are contiguous and step as +1
// the sum of the sequence is
//
// let base = 1 + n;
// let half = (int) n/2
// let remainder = (n%2 === 0 )? 0 : half+1;
//
// sumSequence( [1...n] ) = ( base * half ) + remainder


function base(seqLength){
    let base = seqLength + 1;
    return base;
}

function half(seqLength){
    let half = parseInt(seqLength/2);
    return half;
}

function remainder(seqLength){
    let remainder = ( seqLength % 2 === 1 )? half(seqLength) + 1:0;
    return remainder;
}

function sumSequence(seqLength){
    try{
        seqLength = parseInt(seqLength);
        if( seqLength ){
            return (base(seqLength) * half(seqLength) ) + remainder(seqLength);
        }
    } catch(err){
        console.log(err);
    }
    return 0;
}

module.exports = sumSequence;
