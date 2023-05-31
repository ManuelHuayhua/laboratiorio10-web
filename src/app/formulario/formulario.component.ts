import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  
  showConfirmation() {
    if (window.confirm('¿Estás seguro de enviar el formulario?')) {
      // Si el usuario confirma, enviar el formulario
      
    }
    
  }

  onSubmit() {
    
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
  }
  openNewWindow() {
    const formData = `Nombre: ${this.nombre}\nEmail: ${this.email}`;
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.open();
      newWindow.document.write(`<pre>${formData}</pre>`);
      newWindow.document.close();
    } else {
      console.error('Error al abrir la nueva ventana');
    }
  }

}
