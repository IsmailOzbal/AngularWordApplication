import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/shared/services/chart.service';
import { Chart } from 'src/app/shared/Model/Chart';
import { GetexamService } from 'src/app/shared/services/getexam.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string;
  public barChartLegend: boolean;
  public barExist = false;
  public chartData: Chart[] = [];
  public pieData: Chart[] = [];
  public barData: Chart[] = [];
  public radarData: Chart[] = [];
  public barChartData: any[] = [{ data: [], label: '' }];

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: any[] = [{ data: [], label: '' }];
  public doughnutChartType: string;
  public doughnutChartLegend: boolean;
  public doughnutExist = false;
  // Radar
  public radarChartLabels: string[] = [];
  public radarChartData: any = [{ data: [], label: '' }];
  public radarChartType: string;
  public radarExist = false;

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: any[] = [{ data: [], label: '' }];
  public pieChartType: string;
  public pieExist = false;

  // PolarArea
  public polarAreaChartLabels: string[] = [];
  public polarAreaChartData: number[] = [];
  public polarAreaLegend: boolean;

  public polarAreaChartType: string;

  // lineChart
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean;
  public lineChartType: string;


  constructor(private chartService: ChartService, private examService: GetexamService, private spinner: NgxSpinnerService ) {
  }



  ngOnInit() {

    this.GetCharData();

    this.GetBarData();

    this.getCompleteWordData();

    this.getWordLevelData();

    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.doughnutChartType = 'doughnut';
    this.doughnutChartLegend = true;
    this.radarChartType = 'radar';
    this.pieChartType = 'pie';
    this.polarAreaLegend = true;
    this.polarAreaChartType = 'polarArea';
    this.lineChartLegend = true;
    this.lineChartType = 'line';

  }

  GetBarData() {
    this.examService
      .getExamChartData()
      .toPromise()
      .then(res => {
        console.log(res);
        this.barData = res;
        this.barChartLabels = this.barData['labels'];
        this.barChartData[0].data = this.barData['data'];
        this.barChartData[0].label = this.barData['series'];
        this.barExist = true;
      });
  }


  getCompleteWordData() {

      this.chartService
      .getChartCompleteWordData()
      .toPromise()
      .then(res => {
        this.pieData = res;
        this.pieExist = true;
        this.pieChartLabels = this.pieData['labels'];
        this.pieChartData[0].data = this.pieData['data'];
        this.pieChartData[0].label = this.pieData['series'];

      });

    }


  getWordLevelData()   {
      this.chartService
      .getChartWordLevelData()
      .toPromise()
      .then(res => {
        this.radarData = res;
        this.radarExist = true;
        this.radarChartLabels = this.radarData['labels'];
        this.radarChartData[0].data = this.radarData['data'];
        this.radarChartData[0].label = this.radarData['series'];
      });
    }

  GetCharData() {
    this.chartService
      .getChartData()
      .toPromise()
      .then(res => {
        this.chartData = res;
        this.doughnutExist = true;
        this.doughnutChartLabels = this.chartData['labels'];
        this.doughnutChartData[0].data = this.chartData['data'];
        this.doughnutChartData[0].label = this.chartData['series'];
      });
  }


}
