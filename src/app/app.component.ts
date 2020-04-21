import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
declare var Stimulsoft: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'hvz-resportDesigner';
  options: any;
  designer: any;

  ngOnInit() {

    this.options = new Stimulsoft.Designer.StiDesignerOptions();
    this.options.appearance.fullScreenMode = true;

    this.designer = new Stimulsoft.Designer.StiDesigner(this.options, 'StiDesigner', false);

    this.designer.report = new Stimulsoft.Report.StiReport();
    this.designer.report.loadFile('../reports/CTPResume.mrt');
    this.designer.renderHtml('designer');
    }
}
