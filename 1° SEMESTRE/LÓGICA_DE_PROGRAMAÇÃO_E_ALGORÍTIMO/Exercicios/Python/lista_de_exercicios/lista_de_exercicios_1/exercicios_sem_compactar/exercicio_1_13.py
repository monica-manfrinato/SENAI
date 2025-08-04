#-*- coding: UTF-8 -*- 

print("Me dê suas três notas e seu número de faltas que te direi qual sua situação escolar final")
nota_1 = float(input("Qual a sua primeira nota?"))
nota_2 = float(input("Qual a sua segunda nota?"))
nota_3 = float(input("Qual a sua terceira nota?"))
faltas = int(input("Quantas faltas você teve durante o semestre?"))

media = (nota_1 + nota_2 + nota_3)/3
porcentagem_faltas = faltas*100/80

if media >= 7 and porcentagem_faltas <= 25:
    print("Parabéns! Você foi aprovado!")
elif media < 7 and porcentagem_faltas <= 25:
    print("Você foi reprovado por média!")
elif media >= 7 and porcentagem_faltas > 25:
    print ("Você foi reprovado por número de faltas")
else:
    print("Você foi reprovado por não preencher ambos os parâmetros")
