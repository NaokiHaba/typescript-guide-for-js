class HttpRequest {
  readonly method: string;
  readonly url: string;

  constructor(method: string, url: string) {
    this.method = method;
    this.url = url;
  }

  static createGet(url: string) {
    return new HttpRequest("GET", url);
  }

  perform() {
    console.log(`${this.method} ${this.url}`);
  }
}

const req = HttpRequest.createGet("https://example.com");
req.perform();
