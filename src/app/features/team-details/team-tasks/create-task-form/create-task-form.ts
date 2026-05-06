import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-task-form.html',
  styleUrl: './create-task-form.scss',
})
export class CreateTaskForm implements OnInit {
  taskForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.taskForm = this.fb.group({
      taskName: ['', [
        Validators.required, 
        Validators.maxLength(100)
      ]],
      taskDescription: ['', [
        Validators.maxLength(250)
      ]],
      taskStatus: ['', [
        Validators.required
      ]],
      taskPriority: ['', [
        Validators.required
      ]],
      taskAssignee: ['', [
        Validators.required
      ]],
      taskDueDate: ['', [
        Validators.required
      ]],
    });
  }

  cancelTaskForm(): void {
    this.taskForm.reset({
      taskStatus: '',
      taskPriority: '',
      taskAssignee: '',
    });
  }
}

