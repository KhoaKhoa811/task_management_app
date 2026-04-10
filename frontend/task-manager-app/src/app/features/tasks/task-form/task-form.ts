import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  isEditMode = false;
  taskForm!: FormGroup;
  task: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, 
  ) {
    this.isEditMode = !!data.context?.id; 
  }

  ngOnInit() {
    // Phải khởi tạo form ở đây
    this.task = this.data.context?.task || {};
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      status: ['todo']
    });

    // Nếu là Edit, đổ dữ liệu vào
    if (this.isEditMode) {
      this.taskForm.patchValue(this.task);
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log('Dữ liệu lưu:', this.taskForm.value);
    }
  }
}
