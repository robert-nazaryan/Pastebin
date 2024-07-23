import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextBlockService } from '../text-block.service';
import { TextBlockContentDto } from '../models/text-block-content.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-block-content',
  templateUrl: './text-block-content.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./text-block-content.component.css']
})
export class TextBlockContentComponent implements OnInit {
  content: string | null = null;

  constructor(private route: ActivatedRoute, private textBlockService: TextBlockService) { }

  ngOnInit(): void {
    const uniqueKey = this.route.snapshot.paramMap.get('uniqueKey');
    if (uniqueKey) {
      this.textBlockService.getTextBlockContent(uniqueKey).subscribe({
        next: (response: TextBlockContentDto) => {
          this.content = response.content;
        },
        error: (error) => {
          console.error('Не удалось загрузить содержимое текстового блока:', error);
        }
      });
    }
  }
}
