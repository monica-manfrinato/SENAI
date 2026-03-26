# 7. Controle Digital de Brilho 
# Adicione 2 Push Buttons à protoboard e mantenha 1 LED simples 
# configurado como saída PWM. Escreva um programa onde o Botão 1 atua 
# como "Aumentar Brilho" e o Botão 2 como "Diminuir Brilho". Cada vez que 
# um botão for pressionado, o duty cycle do LED deve aumentar ou diminuir 
# em passos (por exemplo, de 10% em 10%). Dica: Você precisará de uma 
# variável para armazenar o nível de brilho atual e de estruturas 
# condicionais (if) para garantir que o valor não passe do limite máximo 
# (65535) nem caia abaixo de zero.

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