input.onButtonPressed(Button.AB, function () {
    kitronik_halo_hd.setTime(17, 38, 0)
})
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(10)
basic.forever(function () {
    haloDisplay.clear()
    haloDisplay.setBrightness(10)
    for (let j = 0; j <= kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds); j++) {
        haloDisplay.setZipLedColor(j, kitronik_halo_hd.colors(ZipLedColors.Blue))
    }
    haloDisplay.setBrightness(255)
    for (let index = 0; index <= 11; index++) {
        haloDisplay.setZipLedColor(5 * index, kitronik_halo_hd.colors(ZipLedColors.Red))
    }
    haloDisplay.setBrightness(10)
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Hours), kitronik_halo_hd.colors(ZipLedColors.Green))
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Minutes), kitronik_halo_hd.colors(ZipLedColors.White))
    haloDisplay.show()
    basic.pause(1000)
})
basic.forever(function () {
    basic.showString(kitronik_halo_hd.readTime().substr(0, 5))
    basic.pause(1000)
})
