"""3 - Entrar com vários números positivos e imprimir a
média dos números digitados."""

'''
#-*- coding: UTF-8 -*-

print("Me dê números positivos e ao final darei a média de todos eles!")
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
        print('''Já chega de inserir números? O resultado da sua média foi de:''', soma/valores)
        break
    '''
        
#-*- coding: UTF-8 -*-

print("Me dê números positivos e ao final darei a média de todos eles!")
valor_repet = int(input("Quantos valores você quer que eu faça a média?")
soma = 0 
for v in range (valor_repet):
    valor = float(input("Digite o valor: "))
    soma = soma + valor
print("A média dos valores é", soma/valor_repet)
                  

















