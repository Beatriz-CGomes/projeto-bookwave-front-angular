import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';
import { ModalLoginComponent } from '../modal-login/modal-login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(isCadastro: boolean) {
    // Fecha todos os diálogos abertos antes de abrir um novo
    this.dialog.closeAll();

    if (isCadastro) {
      this.dialog.open(ModalCadastroComponent);
    } else {
      this.dialog.open(ModalLoginComponent);
    }
  }
}