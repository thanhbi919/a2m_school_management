import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject/subject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-update',
  templateUrl: './subject-update.component.html',
  styleUrls: ['./subject-update.component.css']
})
export class SubjectUpdateComponent implements OnInit {

  currentSubject: Subject = new Subject();
  subjectError: Subject = new Subject();
  subjectId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectId = Number(this.route.snapshot.paramMap.get('id'));
    this.getSubjectById(this.subjectId);
  }

  getSubjectById(subjectId: number){
    this.subjectService.getById(subjectId).subscribe(
      data => {
        this.currentSubject = data
      }
    )
  }

  updateSubject(){
    this.subjectService.createSubject(this.currentSubject).subscribe(
      data => {
       
        this.gotoTeacherList();

      },
      error => {
        
        this.subjectError = error["error"];
      }
    )
  }
  gotoTeacherList(){
    this.router.navigateByUrl(`/a2m/subject`);
  }

}
