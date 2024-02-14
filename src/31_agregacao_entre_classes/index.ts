/*------------------------------------------------------------------------*/
export class ShoppingCart {
  private readonly products: Product[] = [];

  public insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  private quantityOfProducts(): number {
    return this.products.length;
  }

  private totalValue(): number {
    return this.products.reduce((accumulator, product) => accumulator + product.price, 0);
  }

  public showQuantityOfProducts(): void {
    console.log(`\nQuantidade de produtos no carrinho: ${this.quantityOfProducts()}un`);
  }

  public showTotalValue(): void {
    console.log(`\nValor total do carrinho: R$${this.totalValue()}`);
  }
}

/*------------------------------------------------------------------------*/
export class Product {
  private _name: string;
  public _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }
}

/*------------------------------------------------------------------------*/
const mouse = new Product('Camisa', 40);
const keyboard = new Product('Lápis', 20);
const webcan = new Product('Caneta', 30);

const shoppingCart = new ShoppingCart();
shoppingCart.insertProducts(mouse, keyboard, webcan);
shoppingCart.showQuantityOfProducts();
shoppingCart.showTotalValue();

console.log();
console.log(shoppingCart);
