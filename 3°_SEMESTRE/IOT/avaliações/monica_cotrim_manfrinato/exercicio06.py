# 6. Pisca-Pisca com Velocidade Ajustável 
# Monte um circuito com 1 LED simples e 1 Potenciômetro (conectado a um 
# pino ADC). Crie um código onde o LED pisca continuamente. O valor 
# analógico lido pelo potenciômetro deve ser convertido para definir o 
# tempo de pausa (sleep()) entre o ligar e desligar do LED. Resultado 
# esperado: Ao girar o eixo do potenciômetro, o LED pisca mais rápido ou 
# mais devagar.

from machine import Pin, ADC
from utime import sleep

potenciometro = ADC(28)
led = Pin(14, Pin.OUT)

while True:
    
    valor_potenciometro = potenciometro.read_u16()
    print (valor_potenciometro)
    led.toggle()
    sleep(65535 / valor_potenciometro * 0.02)
    sleep(0.02)    