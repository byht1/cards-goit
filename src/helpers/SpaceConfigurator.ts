type TSpace = 'padding' | 'margin';

type StringOrNumber = number | string;

type ArrayValue =
  | [StringOrNumber, StringOrNumber, StringOrNumber]
  | [StringOrNumber, StringOrNumber]
  | [StringOrNumber];

export type TRequestValue = ArrayValue | StringOrNumber;

type TPosition = 'top' | 'bottom' | 'right' | 'left';

type TAbbreviation = 'p' | 'm';

class SpaceConfigurator {
  private typeSpace: TSpace;
  private abbreviation: TAbbreviation;
  private tabletMedia: number;
  private desktopMedia: number;

  constructor(valueSpace: TSpace, tablet?: number, desktop?: number) {
    this.typeSpace = valueSpace;
    this.abbreviation = valueSpace[0] as TAbbreviation;
    this.tabletMedia = tablet ?? 768;
    this.desktopMedia = desktop ?? 1440;
  }

  public space = (props: TMarginAndPaddingProps) => {
    let value = '';

    const t = (this.abbreviation + 't') as 'mt' | 'pt';
    const r = (this.abbreviation + 'r') as 'mr' | 'pr';
    const b = (this.abbreviation + 'b') as 'mb' | 'pb';
    const l = (this.abbreviation + 'l') as 'ml' | 'pl';

    const isTop = props[t];
    const isRight = props[r];
    const isBottom = props[b];
    const isLeft = props[l];

    if (isTop) value += this.top(isTop);
    if (isRight) value += this.right(isRight);
    if (isBottom) value += this.bottom(isBottom);
    if (isLeft) value += this.left(isLeft);

    return value;
  };

  private top = (value: TRequestValue) => this.universalIndentation(value, 'top');

  private right = (value: TRequestValue) => this.universalIndentation(value, 'right');

  private bottom = (value: TRequestValue) => this.universalIndentation(value, 'bottom');

  private left = (value: TRequestValue) => this.universalIndentation(value, 'left');

  private universalIndentation = (value: TRequestValue, position: TPosition) => {
    if (Array.isArray(value)) {
      const t = this.convertArrayToString(value).map(x => this.positionSpace(x, position));
      return this.toString(t);
    }

    const string = this.numberOrString(value);

    return this.positionSpace(string, position);
  };

  private positionSpace = (value: string, position: TPosition) =>
    `${this.typeSpace}-${position}: ${value}`;

  private numberOrString = (value: StringOrNumber): string => {
    if (typeof value === 'string') {
      return `${value};`;
    } else {
      return `${value}px;`;
    }
  };

  private convertArrayToString = (arrayValue: ArrayValue): string[] =>
    arrayValue.map(this.numberOrString);

  private toString = (arrayString: string[]): string => {
    return arrayString.reduce<string>((acc, x, i) => {
      if (i === 1) return (acc += this.mediaRule(x, this.tabletMedia));
      if (i === 2) return (acc += this.mediaRule(x, this.desktopMedia));
      return x;
    }, '');
  };

  private mediaRule = (value: string, media: number) => `@media (min-width: ${media}px){${value}}`;
}

const { space: margin } = new SpaceConfigurator('margin');
const { space: padding } = new SpaceConfigurator('padding');

export type TMarginAndPaddingProps = {
  mt?: TRequestValue;
  mr?: TRequestValue;
  mb?: TRequestValue;
  ml?: TRequestValue;
  pt?: TRequestValue;
  pr?: TRequestValue;
  pb?: TRequestValue;
  pl?: TRequestValue;
};

export const marginAndPaddlingProps = (props: TMarginAndPaddingProps) => {
  let value = '';

  value += margin(props);
  value += padding(props);

  return value;
};
