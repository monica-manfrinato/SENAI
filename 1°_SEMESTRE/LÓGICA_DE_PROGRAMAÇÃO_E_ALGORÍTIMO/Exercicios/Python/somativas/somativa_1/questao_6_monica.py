#-*- coding: UTF-8 -*-

print("Olá! Vou calcular sua média com base nas suas notas e te dizer se você foi aprovado ou não!")

total_notas = 0
for x in range (5):
    notas = float(input("Insira a sua nota: "))
    if notas >=0 and notas <=10:
        total_notas += notas
        dados_verdadeiros = 1 #realizei essa conferência pois se ele colocar 1 dos números incoerentes, o programa já precisa parar
    else:
        dados_verdadeiros = 0
        break

if dados_verdadeiros == 0:
    print("Insira valores válidos!")
    
else:
    media = total_notas/5

    if media >= 0 and media <6:
        print(f"Infelizmente você foi reprovado... A sua média foi de {media}")
    elif media >= 6 and media <= 10:
        print(f"Parabéns! Você foi aprovado! A sua média foi de {media}")
