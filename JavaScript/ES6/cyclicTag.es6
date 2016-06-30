"use strict";

class CyclicTag {    
    constructor(...inputProds){
        let prods = new Map();
        inputProds.forEach((p, i) => prods.set(i, p));
        
        this.productions = prods;
        this.size = inputProds.length;
    }
    
    *execute(initialWord){
        let word = initialWord;
        let gen = 0;
        while(word.length !== 0){
            yield [gen, word];
            let ibit = word[0];
            word = word.slice(1);
            if(ibit !== "0")
                word += this.productions.get(gen % this.size);
            
            gen++;
        }
    }
    
    static of(...inputProds){
        return new CyclicTag(...inputProds);
    }
    
    static display(genOutput){
        let val = genOutput.value;
        return " ".repeat(val[0]) + val[1];
    }
}

exports.defualt = module.exports = CyclicTag;
