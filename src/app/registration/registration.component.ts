import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { state } from '@angular/animations';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registerForm: FormGroup;
  interests: string[] = ['Cricket', 'Football', 'Hockey'];
  separatorKeysCodes: number[] = [COMMA, ENTER];
  interestCtrl = new FormControl();
  allInterests: string[] = ['Cricket', 'Football', 'Hockey', 'Basketball', 'Tennis'];
  firstname: any;
  lastname: any;
  email: any;
  mobileno: any;
  state: any;
  country: any;
  address: any;
  tags: any;
  
  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      age: [20, Validators.required],
      addressType: ['', Validators.required],
      address1: [''],
      address2: [''],
      companyAddress1: [''],
      companyAddress2: ['']
    });
    
}
openDialog(): void {
  const dialogRef = this.dialog.open(RegistrationComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

onSubmit() {
  if (this.registerForm.valid) {
    this.userService.register(this.registerForm.value).subscribe(() => {
      this.router.navigate(['/homepage']);
    });
  }
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '250px',
      data: { firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,  
              mobileno: this.mobileno,
              state: this.state,
              country: this.country,
              address: this.address,  
              tags: this.tags }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}

add(event: MatChipInputEvent): void {
  const input = event.input;
  const value = event.value;

  if ((value || '').trim()) {
    this.interests.push(value.trim());
  }

  
  if (input) {
    input.value = '';
  }

  this.interestCtrl.setValue(null);
}

remove(interest: string): void {
  const index = this.interests.indexOf(interest);

  if (index >= 0) {
    this.interests.splice(index, 1);
  }
}

selected(event: any): void {
  this.interests.push(event.option.viewValue);
  this.interestCtrl.setValue(null);
}
}

function openDialog() {
  throw new Error('Function not implemented.');
}



