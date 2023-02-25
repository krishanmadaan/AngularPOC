import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { QA } from '../modal/questionAnswer';
import { EnrollmentProcessQA } from '../Services/enrollmentProcessQA.service';

@Component({
  selector: 'app-enrollment-process-qa',
  templateUrl: './enrollment-process-qa.component.html',
  styleUrls: ['./enrollment-process-qa.component.css']
})
export class EnrollmentProcessQAComponent {

  title = 'questions';

  questionAnswers: QA[]=[];

  constructor(private http:HttpClient, private  generalQuestionAnswerService: EnrollmentProcessQA ){}

  questionForm: FormGroup;
  click: boolean=false;
  clickedId='';

  clickedOnAddAnswerBtn: boolean= false;

  emptyAnswerString='';

  //hello: string= "hi krishan, welcome";

  answerForm: FormGroup;

  enteredQuestion: string='';

  clickedOnEditAnswerButton: boolean= false;

  currentAnswer: string='';

  keyFunc(e: any){
    console.log(e);
    if(this.enteredQuestion.length==1&&e.charCode==32){
    //  this.enteredQuestion=this.enteredQuestion.trim();
    this.enteredQuestion='';
    }
  }

  ngOnInit(){
    //console.log(this.hello)

      this.questionForm= new FormGroup({
        question: new FormControl(null),
        answer: new FormControl('')
      })

      this.answerForm= new FormGroup({
        addAnswer: new FormControl()
      })

     // this.enteredQuestion=this.questionForm.get('question').value

      this.getAllQuestionAnswers();
 }

 getAllQuestionAnswers(){
  this.generalQuestionAnswerService.getAllQuestionAnswers()
  .subscribe((res)=>{
      this.questionAnswers=res;
  })

 }

postQuestion(post: {question: string, answer: string}){
   //  const post={question: this.questionForm.get('question').value, answer: ''};
     console.log(post);
     // this.questionForm.get('question').setValue(null);
     // this.questionForm.controls.firstName.setValue('');

    this.generalQuestionAnswerService.postQuestion(post)
             .subscribe((res)=>{
              this.getAllQuestionAnswers()
              //this.questionForm.get('question').setValue(null);
              this.enteredQuestion=''
         });
}

clicked(id: string){
   this.click=true;
   this.clickedId=id;
   this.clickedOnAddAnswerBtn=true;
   this.currentAnswer='';

}

submitAnswer(id: string, answer: string)
{
       const data= this.questionAnswers.find((p)=> { return p.id==id; })
       console.log(data);
       const updatedData={
             question: data.question,
              // answer: this.answerForm.get('addAnswer').value
              answer: answer
       };
      console.log(id);
      this.click=false;
      this.clickedOnAddAnswerBtn=false;
      this.clickedOnEditAnswerButton=false;//
      this.generalQuestionAnswerService.addAnswer(id, updatedData)
      .subscribe((res)=>{
        this.getAllQuestionAnswers();
    });
}

deleteAnswer(id: string){
  const data= this.questionAnswers.find((p)=> { return p.id==id; })
  console.log(data);
  const updatedData={
        question: data.question,
         // answer: this.answerForm.get('addAnswer').value
         answer: this.emptyAnswerString
  };
 console.log(id);
 this.generalQuestionAnswerService.deleteAnswer(id, updatedData)
 .subscribe((res)=>{
  //alert("Answer is Deleted, Refresh the page..");
  this.getAllQuestionAnswers();
});
}

editTemplate(id: string, currentAnswer: string){
  console.log('edit button clicked');
  console.log(currentAnswer);

  this.clickedId=id;
  this.currentAnswer=currentAnswer;
  console.log(this.currentAnswer);

  this.clickedOnEditAnswerButton=true;
}

editAnswer(){}

cancel(){
  this.clickedOnEditAnswerButton=false;
  this.click=false;
  this.clickedOnAddAnswerBtn=false;
}

}
