import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'
import { Profile } from '../profile.model'
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  profileDetails: Object = {};

  ngOnInit() {
    this.profileDetails = JSON.parse(localStorage.getItem('current.profile.selected'));
    console.log(localStorage.getItem('current.profile.selected'));
  }

}
