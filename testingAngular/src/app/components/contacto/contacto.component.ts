import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  response: string = "";
  arrContactos: Usuario[] = [];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos() {
    this.arrContactos = this.usuariosService.getAll();
  }

  crearContacto(contacto: Usuario): void {
    this.response = this.usuariosService.create(contacto);
  }

  searchContacto(nombre: string): void {
    this.arrContactos = this.usuariosService.getByName(nombre);
  }

  deleteContacto(id: number): void {
    this.arrContactos = this.usuariosService.delete(id);
  }




}
