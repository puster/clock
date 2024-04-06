haloDisplay = kitronik_halo_hd.create_zip_halo_display(60)
haloDisplay.set_brightness(21)

def on_forever():
    haloDisplay.clear()
    haloDisplay.set_brightness(255)
    for index in range(12):
        haloDisplay.set_zip_led_color(5 * index, kitronik_halo_hd.colors(ZipLedColors.RED))
    haloDisplay.set_brightness(10)
    haloDisplay.set_zip_led_color(kitronik_halo_hd.read_time_for_zip(TimeParameter.HOURS),
        kitronik_halo_hd.colors(ZipLedColors.GREEN))
    haloDisplay.set_zip_led_color(kitronik_halo_hd.read_time_for_zip(TimeParameter.MINUTES),
        kitronik_halo_hd.colors(ZipLedColors.WHITE))
    haloDisplay.set_zip_led_color(kitronik_halo_hd.read_time_for_zip(TimeParameter.SECONDS),
        kitronik_halo_hd.colors(ZipLedColors.BLUE))
    haloDisplay.show()
    basic.pause(1000)
basic.forever(on_forever)

def on_forever2():
    basic.show_string(kitronik_halo_hd.read_time().substr(0, 5))
    basic.pause(5000)
basic.forever(on_forever2)
