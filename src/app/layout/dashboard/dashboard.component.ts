import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ChartService } from 'src/app/shared/services/chart.service';
import { Chart } from 'src/app/shared/Model/Chart';
import { WordView } from 'src/app/shared/Model/WordView';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetWordViewListService } from 'src/app/shared/services/get-word-view-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ELEMENT_DATA: WordView[] = [];
  displayedColumns = ['word', 'description', 'sampleSentences', 'type'];
  dataSource: any;
  places: Array<any> = [];
  value_one: number;
  label_one: string;
  value_two: number;
  label_two: string;
  value_three: number;
  label_three: string;
  value_four: number;
  label_four: string;
  value_five: number;
  label_five: string;
  Data: Chart[] = [];
  Labels: string[] = [];
  Counts: number[] = [];
  status = false;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private _chartService: ChartService, private wordService: GetWordViewListService, private spinner: NgxSpinnerService) {
    this.SetValueDashbord();
  }

  SetViewData() {
    this.wordService
      .getWordViewList('7')
      .toPromise()
      .then(res => {
        this.ELEMENT_DATA = res.slice(0, 7);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.status = true;
        this.spinner.hide();
      });
  }

  SetValueDashbord() {
    this._chartService
      .getChartData()
      .toPromise()
      .then(res => {
        this.Data = res;
        console.log(res);
        this.Values();
      });
  }

  Values() {
    this.Labels = this.Data['labels'];
    this.Counts = this.Data['data'];
    // Label set operation
    this.label_one = this.Labels[0];
    this.label_two = this.Labels[1];
    this.label_three = this.Labels[2];
    this.label_four = this.Labels[3];
    this.label_five = this.Labels[4];

    // Value set operation
    this.value_one = this.Counts[0];
    this.value_two = this.Counts[1];
    this.value_three = this.Counts[2];
    this.value_four = this.Counts[3];
    this.value_five = this.Counts[4];
  }

  ngOnInit() {
    this.spinner.show();
    this.SetViewData();
  }


}
