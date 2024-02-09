import { Component, OnInit } from '@angular/core';
import { InterviewTopic, listOfQuestions } from 'app/shared/topics';

@Component({
  selector: 'app-learn-overview',
  templateUrl: './learn-overview.component.html',
  styleUrls: ['./learn-overview.component.css'],
})
export class LearnOverviewComponent implements OnInit {
  title1 = 'Basic Web Question';
  title2 = 'JavaScript Interview Topics';
  title3 = 'Angular Interview Topics';


  basicwebquestion: boolean = false;
  jsquestion: boolean = false;
  angularquestion: boolean = true;

  selectedTopic: string ="JavaScript";
  
  constructor() {}

  ngOnInit(): void {
  }

  updateTopics(event: Event) {
    this.selectedTopic = (event.target as HTMLSelectElement).value;
    console.log(this.selectedTopic)
  }
}
