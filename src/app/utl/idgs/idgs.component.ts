import { Component } from '@angular/core';

@Component({
  selector: 'app-idgs',
  templateUrl: './idgs.component.html',
  styleUrls: ['./idgs.component.css']
})
export class IdgsComponent {
  alum={
    matricula:1234,
    nombre:'Mario',
    apaterno:'Lopez',
    Inscrito:2745.93,
    fechaNacimiento:new Date()
  };
}
