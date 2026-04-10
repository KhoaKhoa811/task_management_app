import { CommonModule } from '@angular/common';
import { Component, Inject, Type } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-side-panel-wrapper',
  imports: [CommonModule],
  templateUrl: './side-panel-wrapper.html',
  styleUrl: './side-panel-wrapper.scss',
})
export class SidePanelWrapper {
  constructor(
    public dialogRef: MatDialogRef<SidePanelWrapper>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, component: Type<any>, context: any }
  ) {}

  close() {
    this.dialogRef.close();
  }
}
