# 3. Controle Manual de Brilho 
# Adicione o Potenciômetro ao circuito (conectado a um pino ADC da Pico). 
# Escreva um programa que leia o valor analógico do potenciômetro e o 
# repasse diretamente para o duty cycle do LED via PWM. Resultado 
# esperado: Ao girar o potenciômetro, o brilho do LED aumenta ou diminui 
# proporcionalmente.

from machine import Pin, PWM, ADC
from utime import sleep

potenciometro = ADC(28)
led = PWM(Pin(14))
led.freq(1000)
led.duty_u16(0) #iniciando o led desligado


while True:
    

    leitura_pot = potenciometro.read_u16()
    led.duty_u16(leitura_pot) #iniciando o led desligado
    print("Valor leitura do potenciômetro", leitura_pot)
    sleep(0.5)