import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const userId = params['id'];
      if (userId) {
        this.userService.getUser(userId).subscribe(user => {
          this.user = user;
        });
      }
    });
  }
  editPhoto() {
    alert('Edit Photo functionality is not implemented yet.');
  }
  editProfile() {
    this.router.navigate(['/edit-profile'], { queryParams: { id: this.user.id } });
  }
  agree() {
    alert('You have agreed.');
  }
}
