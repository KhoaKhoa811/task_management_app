import { Injectable, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidePanelWrapper } from '../../shared/side-panel-wrapper/side-panel-wrapper';

@Injectable({
  providedIn: 'root',
})
export class SidePanel {
  constructor(private dialog: MatDialog) {}

  open(component: Type<any>, context: any = {}) {
    return this.dialog.open(SidePanelWrapper, {
      width: '40vw',            
      height: '100vh',
      maxWidth: 'none',          
      position: { right: '0', top: '0' }, 
      panelClass: 'custom-slide-panel',      
      data: { component, context }
    });
  }
}
