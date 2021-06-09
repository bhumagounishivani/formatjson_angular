import { Component, OnInit } from '@angular/core';
import * as data from "../../../assets/queries.json";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  d:any=(data as any).default;
  displayedColumns: string[] = ["reference","query_type","raised_by","raised_on","status"];
  constructor() { }

  ngOnInit(): void {
  }

}
