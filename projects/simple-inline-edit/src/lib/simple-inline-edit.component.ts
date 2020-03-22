import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { SimpleInlineEditService } from './simple-inline-edit.service';

interface select {
  value: any;
  text: string;
}
@Component({
  selector: 'simple-inline-edit',
  template: `
  <div class="inline-edit-main">
  <div class="label" [innerHtml]="getLabel(value)" *ngIf="!isEditing" (click)="edit($event)"></div>
  <div class="field-wrapper" *ngIf="isEditing" (click)="$event.stopPropagation()">
      <div class="input-field" >
          <div [ngSwitch]="fieldType">
              <div *ngSwitchCase="'select'">
                  <select [(ngModel)]="editedValue" [ngClass]="className">
                      <option *ngFor="let option of options" value="{{option.value}}">{{option.text}}</option>
                  </select>
              </div>
              <div *ngSwitchCase="'number'">
                  <input type="number" [(ngModel)])="editedValue" [ngClass]="className"
                      placeholder="{{placeholder}}" />
              </div>
              <div *ngSwitchCase="'password'">
                  <input type="password" [(ngModel)]="editedValue" [ngClass]="className"
                      placeholder="{{placeholder}}" />
              </div>
              <div *ngSwitchCase="'textarea'">
                  <textarea [(ngModel)]="editedValue" [ngClass]="className" placeholder="{{placeholder}}"></textarea>
              </div>
              <div *ngSwitchDefault>
                  <input type="text" [(ngModel)]="editedValue" [ngClass]="className" placeholder="{{placeholder}}" />
              </div>
          </div>
          <div class="action-buttons">
              <button class="btn btn-sm btn-primary" (click)="save()">Save</button> &nbsp;
              <button class="btn btn-sm btn-dark" (click)="close()">Close</button>
          </div>
      </div>
  </div>
  <div class="inline-edit-overlay" *ngIf="isEditing"></div>
</div>
  `,
  styles: [
    `
.inline-edit-main .label {cursor: pointer}
.inline-edit-main .label:hover {background: #eeeeee;}
.inline-edit-main .field-wrapper {
        position: relative;
        box-shadow: -2px 1px 8px 3px #2f7cf1;
        z-index: 2;
}
.action-buttons  {
            position: absolute;
            bottom: -30px;
            right: 5px;
}
.action-buttons button {
                border-color:#000;
                border-top: 0;
                border-radius: 0 0 2rem 2rem;
}
.inline-edit-overlay {
        background: #000000;
        opacity: 0.2;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
}
        
        
  `
  ]
})
export class SimpleInlineEditComponent implements OnInit {
  @Input() fieldType    : string            = '';
  @Input() placeholder  : string            = '';
  @Input() value        : string            = '';
  @Input() options      : Array<select>     = [];
  @Input() className    : string            = '';
  @Input() otherData    : any               = '';
  @Output() onSave      : EventEmitter<any> = new EventEmitter<any>();

  public editedValue    : string            = '';
  public isEditing      : boolean           = false;
  constructor(private inlineEditService: SimpleInlineEditService) {
    this.inlineEditService.closeEdit$.subscribe(doClose => {
      console.log('doClose', doClose)
      if(doClose && this.isEditing) {
        this.isEditing = false;
      }
    })
   }
  @HostListener('document:click', ['$event'])
  blue(event) {
    this.close();
  }

  ngOnInit(): void {
  }
  getLabel(value) {
    let valueText = '';   
    if(this.fieldType === 'select') {
      for(let i=0; i<this.options.length; i++) {
        if(this.options[i].value == value) {
          valueText = this.options[i].text;
          break;
        }
      }
    } else if(this.fieldType === 'password') { 
      valueText = new Array(value.length + 1).join( '*' );
    } else {
      valueText = value;
    }
    return valueText;
  }

  edit($event) {
    $event.stopPropagation();
    this.editedValue  = this.value;
    this.isEditing    = true;
  }
  save() {
    this.onSave.emit(
      {
        otherData: this.otherData,
        initialValue: this.value,
        updatedValue: this.editedValue
      }
    )
  }
  close() {
    this.editedValue  = this.value;
    this.isEditing    = false;
  }
}
