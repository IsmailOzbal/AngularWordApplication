import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import swal from 'sweetalert2';
import { WordView } from 'src/app/shared/Model/WordView';
import { NgxSpinnerService } from 'ngx-spinner';
import { Token } from 'src/app/shared/Model/Token';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import Speech from 'speak-tts';
import { GetWordViewListService } from 'src/app/shared/services/get-word-view-list.service';
import { DeleteWordService } from 'src/app/shared/services/delete-word.service';
import { UserModel } from 'src/app/shared/Model/User';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  words: WordView[] = [];
  displayedColumns = ['id', 'word', 'type', 'description', 'actions'];
  dataSource: MatTableDataSource<WordView>;
  animal: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  model: any;
  token: Token = new Token();
  user: UserModel = new UserModel();
  speech = new Speech();
  status = false;
  constructor(
    private _service: GetWordViewListService,
    private deleteword: DeleteWordService,
    private spinner: NgxSpinnerService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.GetService();
    Speech.init({
      volume: 1,
      lang: 'en-GB',
      rate: 1,
      pitch: 1,
      voice: 'Google UK English Male',
      splitSentences: true,
      listeners: {
        onvoiceschanged: voices => {

        }
      }
    });

  }



  GetService(): void {
    this._service
      .getWordViewList('')
      .toPromise()
      .then(res => {
        this.words = res;
        this.status = true;
        this.spinner.hide();
        this.convert();
      });
  }

  convert(): void {
    console.log(this.words);
    this.dataSource = new MatTableDataSource(this.words);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteWord(word: WordView): void {
    swal({
      title: 'Are you sure?',
      html: '<u>' + word.word + '</u>' + ' is starting delete operation',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        this.delete(word.id);
      }
    });
  }

  delete(Id: number): void {
    this.deleteword
      .deleteWord(Id)
      .toPromise()
      .then(res => {
        this.animal = res;
        swal('Deleted!', 'Your file has been deleted.', 'success');
        this.TableDeleete(Id);
      });
  }

  hideWord(row: WordView): void {
    this.TableDeleete(row.id);
  }


  TextSpeech(text: any) {
    this.speech
    .speak({
      text: text
    })
    .then(() => {
      console.log('Success !');
    })
    .catch(e => {
      console.error('An error occurred :', e);
    });
  }

  TableDeleete(Id: number): void {
    const index = this.words.findIndex(a => a.id === Id);
    this.words.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.words);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  DetailWord(word: WordView): void {

    this.router.navigate(['/tables/worddetail'], { queryParams: { producer: word.id } });
  }
}
