let nome: string = "Help me";
console.log(nome);

let episode: number = 4;
console.log("this is episode " + 4);
episode = episode + 1;
console.log("next episode is " + episode);

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("my favorite droid is " + favoriteDroid)

let funcao: (name: string) => void

funcao = name => console.log("quem foi o favorito ? " + name);

funcao("R2");


function inclusao(speed: number, inc: number = 1): number {
    let i = inc || 1
    return speed + i
}

console.log(inclusao(5))