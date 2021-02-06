import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit {

  email! : FormControl
  message!: string;
  constructor() { }

  ngOnInit(): void {
    this.email = new FormControl('joseandreshernandezross@gmail.com', Validators.email)
  }

  submit(): void {
    this.message="Thank you =)"
  }
}
