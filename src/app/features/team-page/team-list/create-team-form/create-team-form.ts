import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-team-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-team-form.html',
  styleUrl: './create-team-form.scss',
})
export class CreateTeamForm implements OnInit {

  teamForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.teamForm = this.fb.group({
      teamName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z0-9 ]*$/)
      ]],
      description: ['', [Validators.maxLength(250)]]
    });
  }

  resetForm() {
    this.teamForm.reset({
      teamName: '',
      description: ''
    });
  }
}
