import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

   

  constructor(private fb : FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    })
  }
   submit() {
    if (this.userForm.valid) {
      this.submitEM.emit(this.userForm.value);
    }
  }
  ngOnInit(): void {
  }

  @Input() error: string | null | undefined;
  @Output() submitEM = new EventEmitter();

}
