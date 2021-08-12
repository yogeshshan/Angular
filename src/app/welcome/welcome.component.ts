import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';

  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.router.snapshot.params['name'];
  }

}
