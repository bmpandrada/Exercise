'use strict';

const check = document.querySelector('.click');
check.addEventListener('click',(()=>{
    let e = Math.trunc(Math.random()*4);
    const myProgram = [
        "Chest Exercise",
        "Legs Exercise",
        "Tricep Exercise",
        "Abs Exercise",
    ]
    const chest = [
        "block",
        "none"
    ]
    const legs = [
        "none",
        "block"
    ]
    const tric = [
        "none",
        "none",
        "block"
    ]

    const abs = [
        "none",
        "none",
        "none",
        "block"
    ]
    const progs = [chest, legs, tric, abs];
    let mark = [];
    const sets = ['1 -5 sets 3 reps', '2 sets 8 reps', '2 sets 8 reps', '4 sets 12 reps'];
     for(let i = 0; i < progs.length && myProgram; i++ ){
        mark.push(myProgram[e])
        for(let i = 0; i < sets.lenghth; i++){
            console.log(sets)
        }
    }
    console.log(mark[e]+sets[e])
    document.querySelector('.root').textContent= mark[e];
    document.querySelector('.text').textContent = sets[e];
    document.querySelector(".ex1").style.display =[chest[e]];
    document.querySelector(".ex2").style.display =[legs[e]];
    document.querySelector(".ex3").style.display =[tric[e]];
    document.querySelector(".ex4").style.display =[abs[e]];
}));

