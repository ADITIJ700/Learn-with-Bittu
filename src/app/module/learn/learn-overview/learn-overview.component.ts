import { Component, OnInit } from '@angular/core';
import { InterviewTopic1, listOfQuestions, listOfQuestions1 } from 'app/shared/topics';

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

  selectedTopic: string = "Angular";

  selectedChapter: string = "";
  selectedTopic1: string = "";
  allData: InterviewTopic1[] = listOfQuestions1;
  showDescription: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getChapter();
    this.getListOfTopic();
  }

  updateTopics(event: Event) {
    this.selectedTopic = (event.target as HTMLSelectElement).value;
  }






  updateTopics1(event: Event) {
    this.selectedChapter = (event.target as HTMLSelectElement).value;
    this.getListOfTopic();
  }

  allChapter: string[] = [];
  listOfTopic: any = [];

  getChapter() {
    for (let data of listOfQuestions1) {
      this.allChapter.push(data.chapter)
      this.selectedChapter = this.allChapter[0]   
     }
  }

  getListOfTopic() {
    this.listOfTopic = []
    for (let data of listOfQuestions1) {
      if (this.selectedChapter === data.chapter) {
        for(let topic of data.listOfTopic){
          this.listOfTopic.push(topic)
        }
      }
    }
  }

  toggleDescription(topic: any) {
    topic.showDescription = !topic.showDescription;
  }
}
