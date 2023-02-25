import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { QA } from '../modal/questionAnswer';
import { GeneralQA } from '../Services/generalQA.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent {

//   title = 'questions';

//   questionAnswers: QA[]=[];

//   constructor(private http:HttpClient){}

//   questionForm: FormGroup;
//   click: boolean=false;
//   clickedId='';

//   clickedOnAddAnswerBtn: boolean= false;

//   answerForm: FormGroup;

//   ngOnInit(){
//       this.questionForm= new FormGroup({
//         question: new FormControl(null),
//         answer: new FormControl('')
//       })

//       this.answerForm= new FormGroup({
//         addAnswer: new FormControl(null)
//       })

//        this.http.get<object>('https://questions-c9499-default-rtdb.firebaseio.com/questions.json')
//        .pipe(map((res)=>{
//         let data=[];
//         for(const key in res){
//           if(res.hasOwnProperty(key))
//              data.push({...res[key], id:key})
//         }
//         return data;
//        }))
//        .subscribe((res)=>{
//         console.log(res)
//         this.questionAnswers=res;
//        });
//  }

// postQuestion(){
//     const post={question: this.questionForm.get('question').value, answer: this.questionForm.get('answer').value};
//     //const answer=this.questionForm.get('answer').value;
//     console.log(post);
//     this.http.post('https://questions-c9499-default-rtdb.firebaseio.com/questions.json',post)
//     .subscribe();
// }


// clicked(id: string){
//    this.click=true;
//    this.clickedId=id;

//    this.clickedOnAddAnswerBtn=true;
// }

// storeAnswer(){
//   this.questionForm.get('answer').setValue=this.answerForm.get('addAnswer').value;
// }

// submitAnswer(id: string)
// {
//       //get the data.
//        const data= this.questionAnswers.find((p)=> { return p.id==id; })
//        console.log(data);

//        const updatedData={
//              question: data.question,
//              answer: this.answerForm.get('addAnswer').value
//        };
//       console.log(id);

//        console.log(updatedData);

//        this.http.put('https://questions-c9499-default-rtdb.firebaseio.com/questions/'+ id + '.json', updatedData)
//        .subscribe();
        
// }












title = 'questions';

questionAnswers: QA[]=[];

constructor(private http:HttpClient, private  generalQuestionAnswerService: GeneralQA ){}

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
            this.enteredQuestion='';
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
