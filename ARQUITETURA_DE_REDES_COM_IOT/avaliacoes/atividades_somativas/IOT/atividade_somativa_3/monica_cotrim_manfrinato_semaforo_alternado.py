from utime import sleep
from machine import Pin

led_verm_1 = Pin((16),Pin.OUT)
led_amar_1 = Pin((17),Pin.OUT)
led_verd_1 = Pin((28),Pin.OUT)

led_verm_2 = Pin((15),Pin.OUT)
led_amar_2 = Pin((12),Pin.OUT)
led_verd_2 = Pin((6),Pin.OUT)

while True:
    led_amar_2.off() #semáforo 1 fica verde e o 2 vermelho
    led_verm_1.off()
    led_verd_1.on()
    led_verm_2.on()
    sleep(4)
    led_verd_1.off() #semáforo 1 fica amarelo e o 2 continua vermelho
    led_amar_1.on()
    sleep(2)
    led_amar_1.off() #semáforo 1 fica vermelho e o 2 verde
    led_verm_2.off()
    led_verm_1.on()
    led_verd_2.on()
    sleep(4)
    led_verd_2.off() #semáforo 1 continua vermelho e o 2 amarelo
    led_amar_2.on() #semáforoa amarelo 2 vai mudar pra vermelho e o 1 vai pra verde (reinicia o código)
    sleep(2)
