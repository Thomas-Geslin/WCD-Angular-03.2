import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms'


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {

  searchMovieForm = this.fb.group({
    info: this.fb.group({
      identifiant: [''],
      title: [''],
    }, {
      validators: this.isRequiredValidator('identifiant', 'title')
    }),
    type: [''],
    releaseYear: ['', this.rangeDateValidator(1900, 2023)],
    fiche: ['']
  })

  typeArray: Array<string> = ['film', 'serie', 'episode'];

  ficheArray: Array<string> = ['courte', 'complete'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchMovieForm.patchValue({
      fiche: 'courte'
    })
  }

  // Validator checking if at least one of 'info' inputs is completed
  isRequiredValidator(firstInput: string, secondInput: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const input01 = control.get(firstInput)?.value.length;
      const input02 = control.get(secondInput)?.value.length;
      
  
      if(input01 === 0 && input02 === 0) { 
        return { 'isRequired': { actual: false, expect: true }};
      } else {
        return null;
      }
    }
  }

  // Validator checking if 'releaseYear' input is completed in the good number range
  rangeDateValidator(minYear: number, maxYear: number): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
      const checkedYear = (control.value);

      if(minYear > checkedYear || checkedYear > maxYear) {
        return { 'min': { minimum: '1900', maximum: '2023' }};
      } else {
        return null;
      }
    }
  }

  onSubmit() {
    console.log(JSON.stringify(this.searchMovieForm.value));
  }



}
