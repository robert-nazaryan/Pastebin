import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextBlockService } from '../text-block.service';
import { TextBlockContentDto } from '../models/text-block-content.dto';
import { NgIf } from '@angular/common';
import { format } from 'date-fns'; // Импортируйте функцию форматирования даты

@Component({
  selector: 'app-add-text-block',
  templateUrl: './add-text-block.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./add-text-block.component.css']
})
export class AddTextBlockComponent {
  addTextBlockForm: FormGroup;
  addedTextBlock: TextBlockContentDto | null = null;

  constructor(private fb: FormBuilder, private textBlockService: TextBlockService) {
    this.addTextBlockForm = this.fb.group({
      content: ['', Validators.required],
      expirationTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addTextBlockForm.valid) {
      const formValue = this.addTextBlockForm.value;
      formValue.expirationTime = format(new Date(formValue.expirationTime), "yyyy-MM-dd'T'HH:mm:ssXXX");

      this.textBlockService.addTextBlock(formValue).subscribe(
        (response: TextBlockContentDto) => {
          this.addedTextBlock = response;
        },
        (error) => {
          console.error('Ошибка при добавлении текстового блока', error);
        }
      );
    }
  }

  getGeneratedLink(): string {
    if (this.addedTextBlock) {
      return `http://localhost:4200/text-block/${this.addedTextBlock.uniqueKey}`;
    }
    return '';
  }

  copyToClipboard() {
    const link = this.getGeneratedLink();
    navigator.clipboard.writeText(link).then(() => {
      alert('Ссылка скопирована в буфер обмена');
    }, (error) => {
      console.error('Ошибка при копировании ссылки', error);
    });
  }
}
