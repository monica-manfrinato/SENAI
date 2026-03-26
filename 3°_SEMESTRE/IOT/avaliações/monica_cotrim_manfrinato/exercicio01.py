# 1. Interruptor Simples 
# Monte um circuito com 1 Push Button e 1 LED simples. Escreva um código 
# em MicroPython onde o LED acende apenas enquanto o botão estiver 
# pressionado. Dica: Lembre-se de configurar o pino do botão como Pin.IN 
# (com Pin.PULL_DOWN ou PULL_UP) e o do LED como Pin.OUT.

from machine import Pin
from utime import sleep

botao= Pin(16, Pin.IN)
led= Pin( 14, Pin.OUT)


while True:
    estado_botao = botao.value()

    if  estado_botao == 1:
        print('Led ligado')
        led.value(1)
        
    else:
        print('Led desligado')
        led.value(0)
    sleep(0.1)