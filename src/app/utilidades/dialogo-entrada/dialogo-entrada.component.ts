import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from "@angular/material";
import { ModeloLista } from "../../utilidades";

@Component({
  selector: 'app-dialogo-entrada',
  templateUrl: './dialogo-entrada.component.html',
  styleUrls: ['./dialogo-entrada.component.css']
})
export class DialogoEntradaComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<DialogoEntradaComponent>,
    @Inject(MD_DIALOG_DATA) public datosEntrada: ModeloLista
    ) { }

  ngOnInit() {
  }

}
