import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-u-form',
  templateUrl: './u-form.component.html',
  styleUrls: ['./u-form.component.css']
})
export class UFormComponent implements OnInit {

  constructor(private __fb: FormBuilder) { }

  registerForm: FormGroup;  
  occupationControl = new FormControl('', Validators.required);
  
  occupations : string[] = ['Working Professional', 'College Student', 'Full time aspirant', 'Other'];

  ngOnInit(): void {
    this.registerForm = this.__fb.group({
      occupation: this.occupationControl
    })
  }

}
