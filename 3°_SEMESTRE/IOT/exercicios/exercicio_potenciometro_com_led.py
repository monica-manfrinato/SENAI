#from machine import Pin, PWM, ADC
#from utime import sleep

#potenciometro = ADC(28)
#led_verde = PWM(Pin(16))
#led_verde.freq(1000)

#led_verde.duty_u16(0) #iniciando o led desligado

# while True:
#     leitura_pot = potenciometro.read_u16()
#     led_verde.duty_u16(leitura_pot) #iniciando o led desligado
#     print("Valor leitura do potenciômetro", leitura_pot)
#     sleep(0.5)
    

from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led_pwm = PWM(Pin(16))
led_pwm.freq(1000)
led_comum = Pin(15, Pin.OUT)

while True:
    valor = potenciometro.read_u16()
    porcentagem = int((valor * 100) / 65535)
   
    led_pwm.duty_u16(valor)
    
    if porcentagem > 50:
        led_comum.value(1)
    else:
        led_comum.value(0)
   
    print(f"{porcentagem}%")
    sleep(0.5)
