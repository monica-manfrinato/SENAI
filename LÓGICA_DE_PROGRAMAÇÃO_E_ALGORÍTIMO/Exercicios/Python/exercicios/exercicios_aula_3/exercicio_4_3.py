'''4 - Ler vários números e informar quantos números entre
100 e 200 foram digitados. Quando o valor 0 (zero) for
lido, o programa deve cessar sua execução.'''

#-*- coding: UTF-8 -*-

print("Me dê valores aleatórios e te direi quantos destes valores digitados se encontram entre 100 e 200!")
print("Porém, ao digitar o número 0 (zero) você declara que deseja parar de inserir valores ok?")
quant = 0 
while True:
    numero = float(input("Qual será o número?"))
    if numero >= 100 and numero <= 200:
        quant = quant + 1
    elif numero == 0:
        print ("Que pena que você deseja parar :( você digitou", quant, "números entre 100 e 200! Até a próxima...")
        break
        
