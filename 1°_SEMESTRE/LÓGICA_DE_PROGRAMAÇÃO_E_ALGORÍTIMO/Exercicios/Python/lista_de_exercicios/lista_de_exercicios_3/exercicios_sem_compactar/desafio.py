
''' Você precisa contar quantos dígitos tem um número
fornecido pelo usuário. Crie uma função que faça essa
contagem.
'''
#-*- coding: UTF-8 -*-

print("Digite um valor e direi quantos digitos ele tem!")

x = 0

def contagem ():
    global x

    numero = int(input("Insira o número: "))
    
    if numero < 0:
        print("Insira um número válido!")
    else:
        
        while numero != 0:
                numero = numero//10
                x = x + 1
        print (x)
contagem()
