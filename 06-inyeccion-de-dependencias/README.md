# Inyeccion de dependencias

```javascript
let prescripcion = new Prescription() // creación de la instancia de prescripcion
createDispensing(prescripcion) // usamos la instancia de prescripción
```

```javascript
let prescripcion = new MockPrescription() // creación de la instancia de prescripcion
createDispensing(prescripcion) // usamos la instancia de prescripción
```

En los casos anteriores, aunque es fácil sustituirlo, están en el mismo script.

funcion bar(foo, ext, text){

}

El objectivo es 'crearlas' en otro lugar. -> Si un objeto A depende de otro objeto identificado por un *token* B, el objeto A no usa explicitament la instanciación del objeto B. 

```javascript
let prescripcion = new MockPrescriptionB() // crear esta dependencia en otro lugar, identificada por un id o 'token'
createDispensingA(prescripcion) // usaríamos una instancia inyectada usando el 'token'
```

El objeto A declara *necesito un objeto conocido como "B", ¿alguien me lo puede facilitar?* A no pide un objeto específico, sino delega la responsabilidad sobre qué inyectar al *token* B, que lo rescatará de un contenedor de dependencias. El componente A no sabe cómo se instancia el objeto.

Mapear *token* (key, id) a un valor que es el objeto a ser inyectado, a través de un provider. Un *provider* es una instrucción de Angular sobro *cómo* crear una instancia de un objeto para su inyección futura en un componente, servicio, directiva...

```javascript
@Component({
    providers: [ProductService] //especificamos que el token de ProductService es un provider de inyección
})
class ProductComponent {

    public product: Product

    constructor (private productService: ProductService) { // estamos inyectando el servicio representado por el token ProductService
        this.product = productService.getProduct() //usamos la api
    }
}
```

```javascript
@Component({
    providers: [
        {
            provide: ProductService, // nos provee del 'token' ProductService
            // a continuación le tenemos que definir COMO se crea una instancia de el token
            useClass: ProductService // el 'token' ProductService es una instancia de la clase ProductService 
        }
    ] //especificamos que el token de ProductService es un provider de inyección
})
class ProductComponent {

    public product: Product

    constructor (private productService: ProductService) { // estamos inyectando el servicio representado por el token ProductService
        this.product = productService.getProduct() //usamos la api
    }
}
```

Hay tres formas de decirle a Angular *cómo* crear la dependencia:

- *useClass*: creará una instancia de la clase
- *useFactory*: le pasamos la función de factoría que instancia el objeto
- *useValue*: mapear un 'string' o un 'InjectionToken' a un valor



