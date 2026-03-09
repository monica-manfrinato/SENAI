from machine import Pin
from utime import sleep

led_red = Pin(16, Pin.OUT)
led_green = Pin(17, Pin.OUT)
led_blue = Pin(18, Pin.OUT)

while True:
    print('Vermelho')
    led_red.value(1)
    led_green.value(0)
    led_blue.value(1)
    sleep(1)
    
    print('Verde')
    led_red.value(0)
    led_green.value(1)
    led_blue.value(1)
    sleep(1)
    
    print('Azul')
    led_red.value(1)
    led_green.value(1)
    led_blue.value()
    sleep(1)