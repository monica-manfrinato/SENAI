'''10) Escreva um programa, com uma função que leia 2
valores (A e B), calcule e mostre a soma dos números
ímpares entre eles (inclusive A e B). Nesse caso, considere
que só serão informados valores inteiros positivos e que A é
menor do que B.'''

#-*- coding: UTF-8 -*-

print("Me dê dois númeos e irei mostrar a soma dos valores ímpares entre os dois ")
print("Atenção!  Os valores precisam ser inteiros e positivos!")
print("O valor A DEVE ser menor do que o valor B!!!!")


A = int(input("Qual o valor A?"))
B = int(input("Qual o valor B?"))
soma = 0

def  soma_impar ():
    global A, B, soma
    if B <= A:
            print("Insira o valores na ordem solicitada!")      
       
    else:
        for valor in range (A,B + 1, 1):
            if valor % 2 != 0:
                soma = valor + soma
        print("O valor da soma foi de", soma)

soma_impar()       
            
        
