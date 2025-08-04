'''1 - Faça um programa que receba valores, mostrando na tela, e calcula a soma e a
média desses números. Obs: O programa encerra quando receber um número
negativo.
'''

#-*- coding: UTF-8 -*-

print("Me dê números positivos e ao final darei a soma e a média de todos eles!")
print("Para parar de enviar números, digite um valor negativo!")

soma = 0
valores = 0

while True:
    numero = float(input("Insira o valor?"))
    if numero > 0:
        print("Hmm qual será o próximo número")
        soma = soma + numero
        valores = valores + 1
    else:
        print(f'''Já chega de inserir números?
A soma dos valores resultou em {soma}!
Já o resultado da sua média foi de: {soma/valores}''')
        break
