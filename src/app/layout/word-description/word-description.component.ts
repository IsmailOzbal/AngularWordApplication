import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
import { WordService } from 'src/app/shared/services/word.service';
import { Words } from 'src/app/shared/Model/Words';
import { NgxSpinnerService } from 'ngx-spinner';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Language } from 'src/app/shared/Model/Language';
import { WordDescription } from 'src/app/shared/Model/WordDescription';
import { WordSentences } from 'src/app/shared/Model/WordSentences';
import { WordDescriptionService } from 'src/app/shared/services/word-description.service';
import { WordSentencesService } from 'src/app/shared/services/word-sentences.service';

@Component({
  selector: 'app-word-description',
  templateUrl: './word-description.component.html',
  styleUrls: ['./word-description.component.scss']
})
export class WordDescriptionComponent implements OnInit {
  wordDetailForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private wordService: WordService,
    private spinner: NgxSpinnerService,
    private langService: LanguageService,
    private wordDescService: WordDescriptionService,
    private WordSampleSentencesService: WordSentencesService
  ) {}
  wordList: Words[] = [];
  langList: Language[] = [];
  wordDesc: WordDescription = new WordDescription();
  wordSentences: WordSentences = new WordSentences();

  ngOnInit() {
    this.spinner.show();
    this.wordDetailForm = this.formBuilder.group({
      WordsId: ['', Validators.required],
      LanguageTypeId: ['', Validators.required],
      Description: ['', Validators.required],
      SampleSentences: ['', Validators.required]
    });
    this.GetWord();
    this.GetLang();
  }

  GetWord() {
    this.wordService
      .getWordList()
      .toPromise()
      .then(res => {
        this.wordList = res;
      });
  }

  GetLang() {
    this.langService
      .getLangList()
      .toPromise()
      .then(res => {
        this.langList = res;
        this.spinner.hide();
      });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.wordDetailForm.invalid) {
      return;
    }

    this.wordDesc.LanguageTypeId = this.wordDetailForm.value.LanguageTypeId;
    this.wordDesc.WordsId = this.wordDetailForm.value.WordsId;
    this.wordDesc.Description = this.wordDetailForm.value.Description;

    this.wordSentences.WordId = this.wordDetailForm.value.WordsId;
    this.wordSentences.SampleSentences = this.wordDetailForm.value.SampleSentences;

    this.AddWordDescription();
  }

  AddWordDescription() {
    this.spinner.show();
    this.wordDescService
      .AddWordDescription(this.wordDesc)
      .toPromise()
      .then(res => {
        this.AddWordSentences();
      });
  }

  AddWordSentences() {
    this.WordSampleSentencesService.AddWordSentences(this.wordSentences)
      .toPromise()
      .then(res => {
        this.spinner.hide();
        this.success();
      });
  }

  success() {
    swal({
      position: 'top-end',
      type: 'success',
      title: 'Word details has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
