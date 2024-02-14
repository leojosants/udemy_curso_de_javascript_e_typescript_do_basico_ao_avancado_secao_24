enum Colors {
  RED = 10,
  BLUE = 100,
  YELLOW = 200,
}

enum Colors {
  PURPLE = 'PURPLE',
  GREEN = 201,
  PINK,
}

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.RED);
chooseColor(Colors.BLUE);
chooseColor(Colors.YELLOW);
chooseColor(Colors.PURPLE);
chooseColor(Colors.GREEN);
chooseColor(Colors.PINK);
