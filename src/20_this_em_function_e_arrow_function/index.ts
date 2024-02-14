export function func(this: Date, name: string, age: number): void {
  console.log('\n', this);
  console.log('\n', name);
  console.log('\n', age);
}

func.call(new Date(), 'Leonardo', 10);

func.apply(new Date(), ['Leonardo', 10]);
