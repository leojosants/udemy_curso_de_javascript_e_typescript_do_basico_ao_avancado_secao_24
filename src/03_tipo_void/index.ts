function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Leonardo',
  lastname: 'Santos',

  showName(): void {
    console.log(`${this.name} ${this.lastname}`);
  }
};

noReturn('Leonardo', 'Santos');

person.showName();
