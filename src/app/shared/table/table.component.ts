import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  myControl = new FormControl();
  options;

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

  doFilter(value) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
