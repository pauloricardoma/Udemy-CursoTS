export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }
  mult(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new Calculator(10);
const subCalculator = new SubCalculator(5);

calculator.add(5).mult(2).div(2).sub(5);
subCalculator.add(5).mult(2).div(2).sub(5).pow(2);

console.log(calculator);
console.log(subCalculator);

// Builder - GoF - design pattern
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando via '${this.method}' para ${this.url}`);
  }
}

const request = new RequestBuilder(); // Builder
request.setUrl('http://www.google.com').setMethod('post').send();
