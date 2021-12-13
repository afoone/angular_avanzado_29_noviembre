// Esto es un observer básico, sin rxjs

class Subject {
    constructor(){
        this.observers = []
    }

    // subscripción de un nuevo observador
    add(obs){
	  this.observers = this.observers.concat(obs)
    }

    // unsubscribe de un observador
    delete(obs){
	  this.observers = this.observers.filter(l => l !== obs)
    }

    // notifico de un nuevo elemento
    notify(msg){
	  this.observers.forEach(obs => obs.update(msg))
    }
}

const observer1 = {
	update: msg => console.log(`observer 1: ${msg}`)
}

const observer2 = {
	update: msg => console.log(`observer 2: ${msg}`)
}

const subject = new Subject();
subject.add(observer1);
subject.add(observer2);

subject.notify("hola mundo");
subject.notify("hola 2")
let i = 0;
setInterval(
    ()=> {subject.notify("hola a ratos "+ i); i++},
    3000
)