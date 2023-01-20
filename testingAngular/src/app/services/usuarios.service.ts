import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //baseUrl: string = 'https://reqres.in/api/users'
  private contactos: Usuario[] = [];
  id: number = 2;
  constructor() {
    this.contactos = [
      { id: 1, name: "Juan", telefono: 2345678, mail: 'juan@gmail.com' }
    ]
  }

  getAll(): Usuario[] {
    return this.contactos;
  }

  create(pContacto: Usuario): string {
    pContacto.id = this.id;
    this.contactos.push(pContacto);
    this.id++;
    return 'success';
  }

  getByName(pNombre: string): Usuario[] {
    return this.contactos.filter(contacto => contacto.name.toLowerCase().includes(pNombre.toLowerCase()))
  }

  delete(id: number): Usuario[] {
    return this.contactos.filter(contacto => contacto.id !== id);
  }
}
