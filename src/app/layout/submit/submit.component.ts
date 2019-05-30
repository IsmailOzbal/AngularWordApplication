import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { Words } from 'src/app/shared/Model/Words';
import { WordType } from 'src/app/shared/Model/WordType';
import { WordtypeService } from 'src/app/shared/services/wordtype.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddWordService } from 'src/app/shared/services/add-word.service';
import { WordService } from 'src/app/shared/services/word.service';
import { WordtypepopupComponent } from './wordtypepopup/wordtypepopup.component';
import {WordLevel} from 'src/app/shared/Model/WordLevel';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  closeResult: string;
  private newWord: Words = new Words();
  wordtypeLists: WordType[] = [];
  wordlevelList: WordLevel[] = [];
  submitted = false;
  wordForm: FormGroup;
  heroes: Words;
  wordtype: string;
  constructor(
    private dialog: MatDialog,
    private wordTypeservice: WordtypeService,
    private wordService:  AddWordService ,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private levelService: WordService
  ) {

  }

  ngOnInit() {
    this.wordForm = this.formBuilder.group({
      WordTypeId: ['', Validators.required],
      WordLevelId: ['', Validators.required],
      Word: ['', Validators.required]
    });
    this.spinner.show();
    this.GetWordType();
    this.GetLevel();
  }

  AddWordType(): void {
    const dialogRef = this.dialog.open(WordtypepopupComponent, {
      width: '320px',
      data: {wordtype: this.wordtype}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.wordtype = result;
    });
  }

  GetLevel(): void {
    this.levelService.getWordLevelList().toPromise().then(res => {
    this.wordlevelList = res;
    console.log(this.wordlevelList);
    });
  }


  GetWordType(): void {
    this.wordTypeservice
      .getWordTypeList()
      .toPromise()
      .then(res => {
        this.wordtypeLists = res;
        this.spinner.hide();
      });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value

    this.submitted = true;
    if (this.wordForm.invalid) {
      return;
    }

    this.newWord.id = 0;
    this.newWord.wordTypeId = this.wordForm.value.WordTypeId;
    this.newWord.word = this.wordForm.value.Word;
    this.newWord.wordLevelId = this.wordForm.value.WordLevelId;

    console.log(this.newWord);
    if (!this.newWord.wordTypeId) {
      swal('WordType Id required');
    }

    this.wordService
      .AddWord(this.newWord)
      .toPromise()
      .then(res => {
        this.heroes = res;
        this.success();
      });
  }

  success(): void {
    swal({
      position: 'top-end',
      type: 'success',
      title: 'Word has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
