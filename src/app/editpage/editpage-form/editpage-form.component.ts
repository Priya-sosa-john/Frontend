import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Editpage } from 'src/app/shared/editpage.model';
import { EditpageService } from 'src/app/shared/editpage.service';

@Component({
  selector: 'app-editpage-form',
  templateUrl: './editpage-form.component.html',
  styleUrls: ['./editpage-form.component.css']
})
export class EditpageFormComponent implements OnInit {

  constructor(public service: EditpageService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm) {
    if (this.service.formData.OutletId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postEditPage().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Added successfully', 'Outlet Details')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putEditPage().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Outlet Details')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Editpage();
  }


}
