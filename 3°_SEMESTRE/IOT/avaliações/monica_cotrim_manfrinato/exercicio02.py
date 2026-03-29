# 2. Respirar do LED 
# Modifique o circuito anterior. Agora, em vez de apenas ligar e desligar, use 
# a biblioteca machine.PWM no pino do LED. Crie um laço de repetição (for 
# ou while) que aumente e diminua o duty cycle gradativamente, criando 
# um efeito de "respiração" (fade in / fade out) contínuo no LED.

from machine import Pin, PWM
from utime import sleep


led= PWM(Pin(14))
led.freq(1000)
led.duty_u16(0)

while True:
    for i in range(0, 65535, 1000): #aumenta do 0 até o 65535
        led.duty_u16(i)
        sleep(0.2)
        print("Ligando...")
        
    
    for o in range(65535, 0, -1000): #diminui do 65535 ao 0
        led.duty_u16(o)
        sleep(0.2)
        print("Desligando...")

