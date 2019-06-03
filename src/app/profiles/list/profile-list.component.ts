import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';
import { MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ColumnTranslator from '../../shared/table/column.translator';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfilesComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  data: Profile[];
  displayedColumns: string[] = [];
  displayedColumnsHead: Object[] = [];
  pageSize: number = 10;
  dataSource = new MatTableDataSource<Profile>();
  columnTranslator = new ColumnTranslator();

  constructor(private service: ProfileService, private router: Router) {}

  ngOnInit() {
    this.service.findProfiles().subscribe(result => {
      this.data = result;
      this.displayedColumnsHead = this.columnTranslator.getSchema('PROFILE').getColumnsHead();
      this.displayedColumns = this.columnTranslator.getSchema('PROFILE').getColumns();

      this.displayedColumnsHead.push('View');
      this.displayedColumns.push('view');
    });
  }

  click(profile: Profile){
    this.router.navigate(['/profile/detail', profile.localid]);
    localStorage.setItem('current.profile.selected', JSON.stringify(profile));
  }
}
