from utime import sleep
from machine import Pin

led_verm_1 = Pin((16),Pin.OUT)
led_amar_1 = Pin((17),Pin.OUT)
led_verd_1 = Pin((28),Pin.OUT)

led_verm_2 = Pin((15),Pin.OUT)
led_amar_2 = Pin((12),Pin.OUT)
led_verd_2 = Pin((6),Pin.OUT)

led_ped_verd = Pin((3), Pin.OUT)
led_ped_verm = Pin((2), Pin.OUT)
botao = Pin((27), Pin.IN)

def pedestre():
    if botao.value() == 1:
        led_ped_verm.off()
        led_verd_1.off()
        led_verd_2.off()
        led_amar_1.off()
        led_amar_2.off()
        led_verm_1.on()
        led_verm_2.on()
        led_ped_verd.on()
        sleep(3)
        led_ped_verd.off()
        led_ped_verm.on()
        led_verm_1.off()
        led_verm_2.off()
        sleep(1)

while True:

    if botao.value() == 0:

        led_amar_2.off() and pedestre()#semáforo 1 fica verde e o 2 vermelho
        pedestre()
        led_verm_1.off() and pedestre()
        pedestre()
        led_verd_1.on() and pedestre()
        pedestre()
        led_verm_2.on() and pedestre()
        pedestre()
        sleep(2) and pedestre()
        pedestre()
        led_verd_1.off() and pedestre() #semáforo 1 fica amarelo e o 2 continua vermelho
        pedestre()
        led_amar_1.on() and pedestre()
        pedestre()
        sleep(2) and pedestre()
        pedestre()
        led_amar_1.off() and pedestre() #semáforo 1 fica vermelho e o 2 verde
        pedestre()
        led_verm_2.off() and pedestre()
        pedestre()
        led_verm_1.on() and pedestre()
        pedestre()
        led_verd_2.on() and pedestre()
        pedestre()
        sleep(2) and pedestre()
        pedestre()
        led_verd_2.off() and pedestre() #semáforo 1 continua vermelho e o 2 amarelo
        pedestre()
        led_amar_2.on()  and pedestre()#semáforoa amarelo 2 vai mudar pra vermelho e o 1 vai pra verde (reinicia o código)
        pedestre()
        sleep(2) and pedestre()
