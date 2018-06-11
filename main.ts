//% weight=70 icon="\u30A1" color=#EC7505 block="test"
namespace test {

    //% blockId=show_strings block="hogehoge %v"
    export function putStr(text: string): void {
      basic.showLeds(`
          . . . . .
          . # . # .
          . . . . .
          # . . . #
          . # # # .
          `);
    }
}
