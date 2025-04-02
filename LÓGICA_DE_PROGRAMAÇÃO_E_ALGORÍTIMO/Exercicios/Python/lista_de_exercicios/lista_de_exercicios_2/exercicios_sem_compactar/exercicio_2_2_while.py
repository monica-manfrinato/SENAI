# -*- coding: UTF-8 -*- 

'''2 - Faça um programa que receba valores, mostrando na tela, no final imprima o 
maior e o menor desses números. Obs: O programa encerra quando receber um 
número negativo.''' 

print("Me dê vários números positivos e ao final, te direi qual é o maior e qual é o menor entre eles!") 
print("Para parar de enviar números, digite um valor negativo!") 

numero = float(input("Insira o número: "))

#defini os dois primeiros valores de variável como o primeiro número inserido pelo usuáio

maior_valor = numero 
menor_valor = numero

while True: 
    numero = float(input("Insira o valor: "))

    if numero < 0: 
        print("Que pena que você deseja parar... ") 
        break
 
    elif numero > maior_valor: 
        maior_valor = numero

    elif numero < menor_valor: 
        menor_valor = numero
        
if maior_valor == menor_valor:
    print (" Erro! Todos os valores inseridos foram iguais...")
else:
    print(f"""O menor valor foi: {menor_valor} 
O maior valor foi: {maior_valor}""")
