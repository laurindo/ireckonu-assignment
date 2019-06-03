import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Output() clickEvent: EventEmitter<Element> = new EventEmitter();

  @Input() displayedColumns: string[];
  @Input() displayedColumnsHead: string[];
  @Input() pageSize: string;

  dataSource: MatTableDataSource < Element[] >;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {}

  @Input() set data(data) {
    this.dataSource = new MatTableDataSource < Element[] > (data);
    this.dataSource.paginator = this.paginator;
  }

  onRowClicked(row) {
    this.clickEvent.emit(row);
  }

}
