import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tag2';

  form: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        time: null
      }
    );
  }
}
