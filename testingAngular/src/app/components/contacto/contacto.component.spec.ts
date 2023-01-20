import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;
  //metodos de los test que vamos a ejecutar

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoComponent],
      providers: [UsuariosService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente ha sido creado', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ContactoComponent);
  });

  it('cargar Contactos tengo que tener al menos un 1 contacto', () => {
    //propiedad de inputs y outputs o otra propiedad.
    component.cargarContactos();
    expect(component.arrContactos.length).toBe(1);
  })

  it('crearcontacto, añadimos un contacto a la lista', () => {
    const contacto: Usuario = { name: "Lucia", telefono: 46564596, mail: 'juan@gmail.com' };
    component.crearContacto(contacto);
    expect(component.arrContactos.length).toBe(2);
    expect(component.response).toBe('success');
  })

  it('busqueda por nombre satisfactoria, el envio de un nombre me tiene que devolver el contacto', () => {
    let nombre: string = 'Juan';
    component.searchContacto(nombre);
    expect(component.arrContactos.length).not.toBe(0);
  })

  it('borrar un contacto de la lista', () => {
    const longitudInicial = component.arrContactos.length;
    component.deleteContacto(1);
    expect(component.arrContactos.length).toBe(longitudInicial - 1);
  })


});
