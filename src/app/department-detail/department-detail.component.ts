import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
    </p>

    <div>
      <Button>Button Back<Button>
    <div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     let id = parseInt
  }

}
