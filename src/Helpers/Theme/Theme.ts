class ThemeBaseElement {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  chose = () => {
    Theme.chose(this);
  };
  get isActif(): boolean {
    return Theme.isSelected(this);
  }
}

class Theme {
  list: ThemeBaseElement[];

  private static _selected?: ThemeBaseElement;

  private static instance: Theme;

  constructor(list: ThemeBaseElement[]) {
    this.list = list;
    Theme._selected = list[0];
    Theme.instance = this;
    Theme.apply();
  }

  get selected(): ThemeBaseElement | undefined {
    return Theme._selected;
  }

  static select(theme: ThemeBaseElement): void {
    Theme._selected = theme;
  }

  static chose(theme: ThemeBaseElement) {
    Theme.select(theme);
    Theme.apply();
  }

  static isSelected(theme: ThemeBaseElement): boolean {
    return Theme._selected === theme;
  }

  static apply(): void {
    const theme = Theme.instance;
    document.documentElement.className = theme.selected?.name as string;
  }
}

const theme = new Theme(
  ["dark", "purple", "light","sunset", "orange"].map(
    (name) => new ThemeBaseElement(name)
  )
);

export { theme };
