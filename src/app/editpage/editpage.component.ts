import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Editpage } from '../shared/editpage.model';
import { EditpageService } from '../shared/editpage.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styles: [
  ]
})
export class EditpageComponent implements OnInit {

  constructor(public service: EditpageService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Editpage) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEditPage(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Outlet Detail');
          },
          err => { console.log(err) }
        )
    }
  }

}
