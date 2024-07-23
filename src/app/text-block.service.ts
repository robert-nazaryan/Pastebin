// text-block.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TextBlockContentDto } from './models/text-block-content.dto';

@Injectable({
  providedIn: 'root'
})
export class TextBlockService {
  private apiUrl = 'http://localhost:8080/api/v1/textBlocks';

  constructor(private http: HttpClient) {}

  addTextBlock(textBlock: any): Observable<TextBlockContentDto> {
    return this.http.post<TextBlockContentDto>(`${this.apiUrl}/add`, textBlock);
  }

  getTextBlockContent(uniqueKey: string): Observable<TextBlockContentDto> {
    return this.http.get<TextBlockContentDto>(`${this.apiUrl}/${uniqueKey}`);
  }
}
