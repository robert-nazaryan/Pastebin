export class AddTextBlockRequestDto {
  content: string;
  expirationTime: string;

  constructor(content: string, expirationTime: string) {
    this.content = content;
    this.expirationTime = expirationTime;
  }
}
