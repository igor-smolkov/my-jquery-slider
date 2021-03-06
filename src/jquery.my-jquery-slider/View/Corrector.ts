class Corrector {
  public static correcterValueTailBy(source: number) {
    const mantissa = source.toString().split('.')[1];
    const mantissaLength = mantissa ? mantissa.length : 0;
    return (value: number): number => +(value).toFixed(mantissaLength);
  }
}

export { Corrector }