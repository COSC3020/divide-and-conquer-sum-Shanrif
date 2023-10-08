function divideAndConquerSum(a) {
    // first we're  doing the pre-liminary checks
    if (a.length == 0)
    {
        return 0;
    }
    else if (a.length == 1)
    {
        return a[0]; 
    }
    // since we're splitting into 3 I'm adding a 3rd case where we have 2 data-points in the array 
    else if (a.length == 2)
    { 
        return a[0] + a[1];
    }
    // I'm not sure if this is properly splitting my function into three? 
    let left = a.slice(0, (a.length/3)),
    middle = a.slice((a.length/3), ((2 * (a.length/3)))),
    right = a.slice(((2 * (a.length/3)), a.length));
    
    return sum(left) + sum(middle) + sum(right);
}

function sum(array)
{
    if (array.length === 0) 
    {
        return 0;
    }
    else {
        return array[0] + sum(array.slice(1));
    }
}

/*
Using the count matches divide and conqure as a reference

// https://stackoverflow.com/questions/50355260/inline-child-processes-in-node-js
function nmPDC(arr, key, done) {
const fileSync = require('tmp').fileSync;
const writeFileSync = require('fs').writeFileSync;
const fork = require('child_process').fork;
function createWorker(fn) {
const tmpobj = fileSync({ tmpdir: "." });
writeFileSync(tmpobj.name,
`process.on('message', function(m) {` +
`${fn.toString()}` +
`nmPDC(m[0], m[1]);});`);
return fork(tmpobj.name);
}
function nMatches(arr, key) {
let m = 0;
for(let i = 0; i < arr.length; i++) {
if(arr[i] == key) m++;
}
return m;
}
const thresh = 2;
if(arr.length <= thresh) {
if(done === undefined) process.send(nMatches(arr, key));
else done(nMatches(arr, key));
return;
}
let left = arr.slice(0, arr.length/2),
right = arr.slice(arr.length/2, arr.length);
let res = undefined,
t = createWorker(nmPDC);
t.on("message", function(n) {
console.log("Left worker: " + n);
if(res === undefined) res = n;
else {
if(done === undefined) process.send(res + n);
else done(res + n);
}
t.kill();
}).send([left, key]);
nmPDC(right, key, function(n) {
console.log("Right worker: " + n);
if(res === undefined) res = n;
else {
if(done === undefined) process.send(res + n);
else done(res + n);
}
});
}
nmPDC([3,5,9,3,4,6,7,2,1,8,3,3,5,2,3,9], 3, console.log);
*/ 