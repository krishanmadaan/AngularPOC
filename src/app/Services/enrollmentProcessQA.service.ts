import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import {QA} from "../modal/questionAnswer"

@Injectable()
export class  EnrollmentProcessQA{
    constructor(private http: HttpClient){}

    //questionAnswers: QA[]=[];

    postQuestion( post: {question: string, answer: string}){
       let question=post.question.trim();
       let questionMark='';
       let lastCharacterOfQuestion=question.charAt (question.length-1);
       if(lastCharacterOfQuestion!='?'){
        questionMark=questionMark+'?';
       }

        post.question=(' ' + question.charAt(0).toUpperCase() + question.slice(1)+ questionMark);
        return (this.http.post('https://questions-c9499-default-rtdb.firebaseio.com/enrollment_process_questions.json',post))
        // .subscribe((res)=>{
        //     alert('question is posted, Refresh the page..')


        // });
    }

   getAllQuestionAnswers(){
     return( this.http.get('https://questions-c9499-default-rtdb.firebaseio.com/enrollment_process_questions.json')
      .pipe(map((res)=>{
        let data=[];
        for(const key in res)
        {
            if(res.hasOwnProperty(key)){
            data.push({...res[key], id: key});
            }
        }
        return data;
      }))  )
   }

   addAnswer(id: string, updatedData: any){
    console.log(id);
    let answer=updatedData.answer.trim();

    let fullStop='';
       let lastCharacterOfAnswer=answer.charAt (answer.length-1);
       if(lastCharacterOfAnswer!='.'){
        fullStop=fullStop+'.';
       }
     updatedData.answer=(' ' + answer.charAt(0).toUpperCase() + answer.slice(1)+ fullStop);
     return(this.http.put('https://questions-c9499-default-rtdb.firebaseio.com/enrollment_process_questions/'+ id + '.json', updatedData))
    // .subscribe((res)=>{
    //     alert("Answer is added, Refresh the page..");
    // });
 }


 deleteAnswer(id: string, updatedData: any){
  console.log(id);
  return (this.http.put('https://questions-c9499-default-rtdb.firebaseio.com/enrollment_process_questions/'+ id + '.json', updatedData))
//   .subscribe((res)=>{
//       alert("Answer is Deleted, Refresh the page..");
//   });
 }



 

}