# 4. O Painel de Cores 
# Substitua o LED simples pelo LED RGB. Configure 3 pinos PWM 
# independentes no seu código (um para a cor Vermelha, um para a Verde 
# e um para a Azul). Use o Potenciômetro para controlar o brilho apenas da 
# cor Vermelha, mantendo o Verde e o Azul sempre desligados (duty cycle 
# 0).

from machine import Pin, PWM, ADC
from utime import sleep

led_red = PWM(Pin(17))
led_green = Pin(18, Pin.OUT)
led_blue = Pin(19, Pin.OUT)

led_red.duty(0)
led_red.freq(1000)

potenciometro = ADC(28)

while True:
    led_green.value(0)
    led_blue.value(0)
    
    leitura_pot = pot.read_u16()
    led_red.duty(leitura_pot)
    
    print('Valor de leitura do potenciômetro', leitura_pot)
    sleep(0.2)