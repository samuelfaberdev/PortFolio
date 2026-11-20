declare module "konami" {
  class Konami {
    constructor(callback: string | (() => void));
    load(link?: string): void;
    unload(): void;
  }
  export default Konami;
}
