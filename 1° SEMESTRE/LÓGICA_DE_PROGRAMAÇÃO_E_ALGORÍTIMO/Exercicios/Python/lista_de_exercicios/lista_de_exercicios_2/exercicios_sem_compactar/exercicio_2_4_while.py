'''4 - Faça um programa que leia vários inteiros positivos e mostre, no final, a soma
dos números pares e a soma dos números ímpares. O programa para quando entrar
um número maior que 1000.'''

#-*- coding: UTF-8 -*-

print("Me dê vários números e trarei uma soma separada dos números ímpares e dos números pares")
print("Para parar de enviar números, digite um valor maior do que 1000")
negativo = 0
positivo = 0

while True:
    valor = float(input("Digite o valor: "))
    
    if valor > 1000:
        print("Que pena que você escolheu parar...")
        print(f"""As somas dos números negativos e dos números positivos ficaram em:
Soma dos negativos = {negativo}
Soma dos positivos = {positivo}""")
        print("tchau tchau!")
        break
        
    elif valor % 2 == 0:
        positivo = positivo + valor
    elif valor % 2 != 0:
        negativo = negativo + valor
    
