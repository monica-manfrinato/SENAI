from machine import Pin
from utime import sleep

ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

ledVermelho.value(0)
ledAmarelo.value(0)
ledVerde.value(0)

#while(True):
while True:
    ledVermelho.toggle() sleep(1) ledVerde.toggle() sleep(1)
    ledAmarelo.toggle()
    sleep(1)


