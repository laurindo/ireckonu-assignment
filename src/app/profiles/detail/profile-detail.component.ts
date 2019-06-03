import { Component, OnInit } from '@angular/core';
import ColumnTranslator from '../../shared/table/column.translator';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  profileDetails: Object = {};
  profileDetailsGrid: [];
  displayedColumnsHead: [];
  displayedColumns: [];
  grid;
  selectedPageIndex: Number = 0;
  columnTranslator = new ColumnTranslator();

  ngOnInit() {
    this.profileDetails = JSON.parse(localStorage.getItem('current.profile.selected'));
    console.log(localStorage.getItem('current.profile.selected'));

    this.displayedColumnsHead = this.columnTranslator.getSchema('PROFILE_DETAILS').getColumnsHead();
    this.displayedColumns = this.columnTranslator.getSchema('PROFILE_DETAILS').getColumns();
    this.grid = this.displayedColumns.map((column, index) => {
      return {
        label: this.displayedColumnsHead[index],
        value: this.profileDetails[column],
      };
    });
  }

  changeTab(event) {
    this.selectedPageIndex = event.index;
  }

}
