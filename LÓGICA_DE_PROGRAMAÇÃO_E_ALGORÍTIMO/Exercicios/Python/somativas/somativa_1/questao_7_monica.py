#-*- coding: UTF-8 -*-

print('''Olá! Me dê suas informações de peso e altura e te direi qual seu estado de acordo com o cálculo do IMC!
Observação: lembre-se de colocar o peso em quilogramas e a altura em metros!''')

peso = float(input("Insira o seu peso atual: "))
altura = float(input("Insira a sua altura atual: "))
IMC = peso / (altura * altura)

if IMC > 0 and IMC <18.5:
    print("Você está abaixo do peso!")
elif IMC >= 18.5 and IMC <= 24.9:
    print("Você está no seu peso ideal!")
else:
    print("Você está acima do peso!")
