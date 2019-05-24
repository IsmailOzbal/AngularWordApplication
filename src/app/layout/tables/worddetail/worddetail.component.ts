import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { WordView } from 'src/app/shared/Model/WordView';
import Speech from 'speak-tts';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetWordViewListByIdService } from 'src/app/shared/services/get-word-view-list-by-id.service';
@Component({
  selector: 'app-worddetail',
  templateUrl: './worddetail.component.html',
  styleUrls: ['./worddetail.component.scss']
})
export class WorddetailComponent implements OnInit {
  wordId: any;
  wordView: WordView = new WordView();
  speech = new Speech();
  config: any = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };
  images: string[] = [
    'http://icdn.ensonhaber.com/resimler/galeri/ak_baYlY_kartal.jpg',
    'https://www.duvarkapla.com/media/catalog/product/cache/9/image/750x/17f82f742ffe127f42dca9de82fb58b1/N/A/NA3509.jpg',
    'https://img-s1.onedio.com/id-5728d25de07beaad7c3b731a/rev-0/w-635/listing/f-jpg-webp/s-08589190e9b8fda08adf8201da4377c0aede5344.webp'
  ];

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private _wordservice: GetWordViewListByIdService,
    private router: Router
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.route.queryParams
      .filter(params => params.producer)
      .subscribe(params => {
        this.wordId = params.producer;
        this.getWord();
      });
  }

  SpeechInit() {
    Speech.init({
      volume: 1,
      lang: 'en-GB',
      rate: 1,
      pitch: 1,
      voice: 'Google UK English Male',
      splitSentences: true,
      listeners: {
        onvoiceschanged: voices => {
          console.log('Event voiceschanged', voices);
        }
      }
    });
  }

  GoBack() {
    this.router.navigate(['/tables']);
  }

  TextToSpeech(_text: any) {
    this.SpeechInit();
    this.speech
      .speak({
        text: _text
      })
      .then(() => {
        console.log('Success !');
      })
      .catch(e => {
        console.error('An error occurred :', e);
      });
  }

  getWord() {
    this._wordservice
      .getWordViewListById(this.wordId)
      .toPromise()
      .then(res => {
        this.wordView = res[0];
        this.spinner.hide();
      });
  }
}
