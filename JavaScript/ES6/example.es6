"use strict";
const CyclicTag = require("./cyclicTag.es6");

let example = new CyclicTag("010", "000", "1111");
let gen = example.execute("11001");
let MAX_GENS = 21;

let running;
do {
    let cur = gen.next();
    console.log(CyclicTag.display(cur));
    
    running = !cur.done && cur.value[0] < MAX_GENS;
} while(running);
