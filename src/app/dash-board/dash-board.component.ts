import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MatDialog } from '@angular/material/dialog';
import { NewRequestComponent } from '../new-request/new-request.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  constructor(public dialog: MatDialog) {}
   dialogRef : any;
  openDialog(type : string) {
    
    if(type === 'about')
    {
     this.dialogRef = this.dialog.open(AboutComponent,{
      width: '50vw',
      height: '80vh'});
    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      this.dialogRef.close('abouttt');
    });
    }
    else{
       this.dialogRef = this.dialog.open(NewRequestComponent,{
        width: '50vw',
        height: '80vh'});
      this.dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
        this.dialogRef.close('closeddd');
      });
    } 
    
  }
  
}

function closeDialog() {
  throw new Error('Function not implemented.');
}

