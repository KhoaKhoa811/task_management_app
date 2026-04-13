import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  taskForm!: FormGroup;
  task: any;
  pageTitle = '';
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, 
  ) {}

  ngOnInit() {
    this.task = this.data.context?.task || {};

    this.initializeForm();

    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      status: ['todo']
    });
  }

  initializeForm() {
    this.pageTitle = this.task.title || 'Untitled';
  }

}
