import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.css']
})
export class DialogoConfirmacionComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<DialogoConfirmacionComponent>,
    @Inject(MD_DIALOG_DATA) public mensaje: string
  ) { }

  ngOnInit() {
  }

}
