export class TextBlockContentDto {
  content: string;

  uniqueKey: string;

  constructor(content: string, uniqueKey: string) {
    this.content = content;
    this.uniqueKey = uniqueKey;
  }

}
