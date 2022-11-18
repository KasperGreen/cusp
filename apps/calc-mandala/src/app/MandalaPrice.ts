export class MandalaPrice {
  static cast = [
    'Elfafeya',
    'KasperGreen'
  ]
  static millimeterPrice = 0.0108
  static get personsCount() {
    return this.cast.length
  }
  static calculate = (sizeInMillimeters: number) => {
    const polygonSize = Math.PI * sizeInMillimeters ** 2
    const multiplier = sizeInMillimeters / 1080 * 2
    const price = polygonSize * this.millimeterPrice * this.personsCount
    return price + price * multiplier
  }
}
