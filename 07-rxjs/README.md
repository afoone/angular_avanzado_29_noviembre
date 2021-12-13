# RxJS

La programación síncrona es relativamente directa, cada línea se ejecuta después de la linea previa

La programación asíncrona -> incrementa drásticamente la complejidad del código


*Erik Meijer* 2009 -> Rx.NET (para .NET)

¿Qué es programación reactiva?

```javascript
let a1 = 2
let b1 = 4
let c1 = a1 + b1
```

```javascript
a1 = 50
b1 = 50
```

en programación imperativa necesito ejecutar de nuevo ` c1 = a1 + b1`

Programación reactiva se basa en crear aplicaciones responsivas dirigidas por eventos, donde un stream de eventos se comunican haciendo push sobre los subscriptores, que observan y manejan dichos evento.

El objetivo en programación reactiva sería que c1 directamente tomase el valor 100. Para ello c1 debería "observar" los cambios de a1 y b1.

# Observer

Patrón básico y clásico (gang of four) para el procesamiento asíncrono.


Un observable:
 - emite el siguiente evento
 - emitir un error
 - informar a los observadores que no habrán más eventos

 Un observer:
 - función para manejar el siguiente evento
 - función para manejar los errores
 - función para manejar el final del stream

 El subscriptor se suscribe con `subscribe()` y se desconecta con `unsubscribe()`

 El observable se comunica con los observers con:

- `next()`
- `error()`
- `complete()`
