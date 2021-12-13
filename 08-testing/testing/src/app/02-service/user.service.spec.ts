import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    // inyecta el servicio, es como hacerlo en providers, pero tengo la referencia
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería traer users con getUsers()', () => {
    const userData = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
    ];


    service.getUsers().subscribe(res => expect(res).toEqual(userData))

    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    // enviamos una respuesta al cliente
    request.flush(userData)

  });

  it('debería retornar error cuando hay error', () => {
    const ERROR_TYPE = "ERROR ON LOAD"
    service.getUsers().subscribe(
      {
     //   next: () => {},
        error: err => expect(err.error.type).toEqual(ERROR_TYPE)
      }
    )
    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/users')
    // enviamos el error al cliente
    request.error(new ErrorEvent(ERROR_TYPE))
  })
});
