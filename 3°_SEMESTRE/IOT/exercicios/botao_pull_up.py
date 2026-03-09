from machine import Pin
from utime import sleep

botao_up = Pin(15, Pin.IN)
led_red = Pin(16, Pin.OUT)
led_green = Pin(17, Pin.OUT)
led_blue = Pin(18, Pin.OUT)

while True:
    #Variável que armazena o estado do botão
    estado_botao = botao_up.value() #o botão vai ler e armazenar o valor dentro da variavel
    if  estado_botao == 0:
        print('Botãoddfff pressionado (LOW - 0)')
        print(estado_botao)
        led_red.value(1)
        led_green.value(0)
        led_blue.value(0)
    else:
        print('Botão não pressionado (HIGH - 1)')
        print(estado_botao)
        led_red.value(0)
        led_green.value(1)
        led_blue.value(0)

    sleep(1)