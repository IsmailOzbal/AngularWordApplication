import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { WordType } from 'src/app/shared/Model/WordType';
import swal from 'sweetalert2';
import { WordtypeService } from 'src/app/shared/services/wordtype.service';

@Component({
  selector: 'app-wordtypepopup',
  templateUrl: './wordtypepopup.component.html',
  styleUrls: ['./wordtypepopup.component.scss']
})
export class WordtypepopupComponent implements OnInit {

  wordType: WordType;
  constructor(
    public dialogRef: MatDialogRef<WordtypepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private wordtypeservice: WordtypeService ) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {

    if (this.data.wordtype != null) {
      this.wordtypeservice.AddWordType(this.data.wordtype).
      toPromise().
      then(res => {
         this.success();
      });
    }

  }

  success(): void {
    swal({
      position: 'top-end',
      type: 'success',
      title: 'WordType has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
