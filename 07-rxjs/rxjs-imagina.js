const {
  of,
  from,
  filter,
  map,
  reduce,
  Subject,
  Observable,
  mergeMap,
} = require("rxjs");

// creación de observables
// const obs = of(1,2,3)
// obs.subscribe(
//     {
//         next: n => console.log(n),
//         error: err => console.error(err),
//         complete: () => console.log("he terminado")
//     }
// )

const beers = [
  { name: "Stella", country: "Belgium", price: 2.5, quantity: 4 },
  { name: "Cruzcampo", country: "Spain", price: 1.0, quantity: 3 },
  { name: "Aguila", country: "Spain", price: 1.5, quantity: 1 },
];

// const obs = from(beers)
// obs.subscribe(
//     {
//         next: n => console.log(n.name),
//         error: err => console.error(err),
//         complete: () => console.log("he terminado")
//     }
// )

// const obs = from(beers)
// obs.pipe(
//     filter(i => i.country === 'Spain')
// ).subscribe(
//     {
//         next: n => console.log(n.name),
//         error: err => console.error(err),
//         complete: () => console.log("he terminado")
//     }
// )

// const obs = from(beers);
// obs;
// obs
//   .pipe(filter((i) => i.country === "Spain"))
//   .pipe(map((beer) => `Cerveza ${beer.name}`))
//   .subscribe({
//     next: (n) => console.log(n),
//     error: (err) => console.error(err),
//     complete: () => console.log("he terminado"),
//   });

// const obs = from(beers);
// obs;
// obs
//   .pipe(reduce(
//     (acc, curr) => acc + curr.quantity,
//     0
//   ))
//   .subscribe({
//     next: (n) => console.log(n),
//     error: (err) => console.error(err),
//     complete: () => console.log("he terminado"),
//   })

// podemos generar un objeto que contiene un observable y varios observer -> subject
// const mySubject$ = new Subject();
// const subscription1 = mySubject$.subscribe({
//   next: (e) => console.log("subscriptor 1 " + e),
// });
// const subscription2 = mySubject$.subscribe((e) =>
//   console.log("subscriptor 2 " + e)
// );

// mySubject$.next(123);

// subscription1.unsubscribe();

// mySubject$.subscribe((e) => console.log("subscriptor 3 " + e));

// mySubject$.next(456);

function getDrinks() {
  const beers = [
    { name: "Stella", country: "Belgium", price: 2.5, quantity: 4 },
    { name: "Cruzcampo", country: "Spain", price: 1.0, quantity: 3 },
    { name: "Aguila", country: "Spain", price: 1.5, quantity: 1 },
  ];
  const refrescos = [
    { name: "Coca Cola", country: "US", price: 2.5, quantity: 4 },
    { name: "Agua", country: "Spain", price: 1.0, quantity: 3 },
    { name: "Fanta", country: "Germany", price: 1.5, quantity: 1 },
  ];

  const beers$ = from(beers);
  const refrescos$ = from(refrescos);

  return new Observable((observer) => {
    observer.next(beers$);
    observer.next(refrescos$);
    observer.complete();
  });
}

getDrinks().pipe(mergeMap((bebida) => bebida)).subscribe(
    {
        next: drink => console.log("tenemos "+ drink.name),
        complete: console.log("todo bebido")
    }
)
