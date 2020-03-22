import { Component } from '@angular/core';
import { SimpleInlineEditService } from 'simple-inline-edit';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'inline-edit';
  constructor(private inlineEditService : SimpleInlineEditService, private toastr: ToastrService) {}
  public editableArr = [
    {
      label: "Name",
      value:  "Jack",
      fieldType: 'text',
      placeholder: 'Your name here'   
    },
    {
      label: "Message",
      value:  "Lipsum",
      fieldType: 'textarea',
      placeholder: 'Your namessage here'   
    },
    {
      label: "Your Option",
      value:  "2",
      fieldType: 'select',
      options: [
        {value: 1, text: 'Option 1'},
        {value: 2, text: 'Option 2'},
        {value: 3, text: 'Option 3'},
        {value: 4, text: 'Option 4'},
      ] 
    },
    {
      label: "Password",
      value:  "Lipsum",
      fieldType: 'password',
      placeholder: 'Your password here'   
    },
  ]

  onSave(data) {
    if(data.updatedValue === '') {
      this.toastr.error('The field is empty', 'Error!');
      this.inlineEditService.setEditStatus(false);
    } else {
      this.editableArr[data.otherData]['value'] = data.updatedValue;
      this.inlineEditService.setEditStatus(true);
    }
    
  }

}

