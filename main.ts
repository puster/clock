let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(21)
basic.forever(function () {
    haloDisplay.clear()
    haloDisplay.setBrightness(255)
    for (let index = 0; index <= 11; index++) {
        haloDisplay.setZipLedColor(5 * index, kitronik_halo_hd.colors(ZipLedColors.Red))
    }
    haloDisplay.setBrightness(10)
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Hours), kitronik_halo_hd.colors(ZipLedColors.Green))
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Minutes), kitronik_halo_hd.colors(ZipLedColors.White))
    haloDisplay.setZipLedColor(kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds), kitronik_halo_hd.colors(ZipLedColors.Blue))
    haloDisplay.show()
    basic.pause(1000)
})
basic.forever(function () {
    basic.showString(kitronik_halo_hd.readTime().substr(0, 5))
    basic.pause(5000)
})
