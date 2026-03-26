from machine import Pin, PWM, ADC
from utime import sleep


potenciometro = ADC(26)
led = PWM(Pin(15))
led.freq(1000)

while True:
    leitura = potenciometro.read_u16()
    led.duty_u16(leitura)
    sleep(0.1)