import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'
import { Profile } from '../profile.model'
import { MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfilesComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  data: Profile[];
  displayedColumns: string[] = []
  dataSource = new MatTableDataSource<Profile>();

  constructor(private service: ProfileService, private router: Router) {}

  ngOnInit() {
    this.service.findProfiles().subscribe(result => {
      this.data = result;
      for (let key in result[0]) {
        this.displayedColumns.push(key);
      }
    });
  }
  click(profile: Profile){
    this.router.navigate(['/profile/detail', profile.localid])
  }

}
