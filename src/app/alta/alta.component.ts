import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css',
})

export class AltaComponent {

  cliente = {
  nombre: '',
  email: '',
  mensaje: '',
  operacion: ''
};

constructor (private service: CustomerService) {}

sendDataToService() {
    this.service.setData(this.cliente);
}
}