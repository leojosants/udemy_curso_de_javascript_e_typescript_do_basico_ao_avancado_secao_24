/*- - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - -*/
type Method = 'get' | 'post' | null;

type Url = string | null;

/*- - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - -*/
export class Calculator {
  public number: number;

  constructor(number: number) {
    this.number = number;
  }

  public sum(number: number): this {
    this.number += number;
    return this;
  }

  public subtract(number: number): this {
    this.number -= number;
    return this;
  }

  public multiply(number: number): this {
    this.number *= number;
    return this;
  }

  public divide(number: number): this {
    this.number /= number;
    return this;
  }
}

export class SubCalculator extends Calculator {
  public potentialize(number: number): this {
    this.number **= number;
    return this;
  }
}

// Builder - GoF
export class RequestBuilder {
  private method: Method = null;
  private url: Url = null;

  public setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  public setUrl(url: string): this {
    this.url = url;
    return this;
  }

  public send(): void {
    console.log(`Enviando dados pelo verbo '${this.method}' para ${this.url}`);
  }
}

/*- - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - -*/
export function instantiateCalculator(number: number): Calculator {
  return new Calculator(number);
}

export function instantiateSubCalculator(number: number): SubCalculator {
  return new SubCalculator(number);
}

export function instantiateRequestBuilder(): RequestBuilder {
  return new RequestBuilder();
}

export function runMain(): void {
  const calculator = instantiateCalculator(10);
  console.log(calculator);
  calculator.sum(5).multiply(2).divide(2).subtract(5);
  console.log(calculator);

  const subCalculator = instantiateSubCalculator(10);
  console.log(subCalculator);
  subCalculator.sum(5).multiply(2).divide(2).subtract(5).potentialize(2);
  console.log(subCalculator);

  const request = instantiateRequestBuilder();
  request.setMethod('get').setUrl('http://www.udemy.com/').send();
}

/*- - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - -*/
runMain();
