from machine import Pin, PWM, ADC
from utime import sleep

potenciometro = ADC(28)
led_verde = PWM(Pin(16))
led_verde.freq(1000)

led_verde.duty_u16(0) #iniciando o led desligado

while True:
    leitura_pot = potenciometro.read_u16()
    led_verde.duty_u16(leitura_pot) #iniciando o led desligado
    sleep(0.5)