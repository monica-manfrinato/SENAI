from machine import Pin, PWM
from utime import sleep

led= PWM(Pin(16))
led.freq()

leitura = 60000
porcentagem = leitura/65535*100
print("O valor em porcentagem é de:", porcentagem)
print(f"O valor em porcentagem é de {porcentagem:.2f} %")

def converter_porcentagem (leitura):
    
    porcentagem = leitura/65535*100
    print(f"O valor em porcentagem é de {porcentagem:.2f} %")