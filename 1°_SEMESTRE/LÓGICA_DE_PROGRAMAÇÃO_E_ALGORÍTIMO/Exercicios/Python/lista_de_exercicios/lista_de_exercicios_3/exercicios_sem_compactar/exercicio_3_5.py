'''Verificador de Número Primo
Enunciado: Em uma aventura matemática, o personagem encontra
números misteriosos e precisa determinar se eles são primos.
Um número primo é aquele maior que 1 e que não é divisível por
nenhum outro número além de 1 e ele mesmo. Sua missão é criar
uma função que verifica se um número é primo.
'''

#-*- coding: UTF-8 -*-

print("Me dê um número e te direi se ele é ou não um número primo!")

def primos ():
    valor = int(input("Insira o valor: "))
    if valor <= 1:
        print("Insira um valor válido!")
    elif valor == 2:
        for x in range (2,valor +1):
            if valor%x == 0:
                print(f"O número {valor} não é primo!")
                break
            elif valor%x != 0:
                print(f"O número {valor} é primo!")
                break
    else:
        for x in range (2,valor):
            if valor%x == 0:
                print(f"O número {valor} não é primo!")
                break
            elif valor%x != 0:
                print(f"O número {valor} é primo!")
                break

primos()

        
