export class Utils {
  static getDrinkString(num: number): string {
    if (num < 1) {
      return '';
    } else {
      return num === 1 ? 'drink' : 'drinks';
    }
  }
}
