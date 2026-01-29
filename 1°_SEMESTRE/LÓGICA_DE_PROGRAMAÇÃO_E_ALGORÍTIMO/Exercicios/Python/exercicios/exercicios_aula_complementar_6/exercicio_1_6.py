'''Faça um programa em python que receba a temperatura média de cada mês do ano, armazendando-as em um vetor. Calcule e mostre:
A maior temperatura
Amenor temperatura
A média das temperaturas'''

#-*- coding: UTF-8 -*-

medias = {}
meses = 1
maior = 0
def medias_mes():
    global meses, maior
    for i in range (12):
        mes = input("Qual é o mês?")
        media = float(input(f"Qual é a média do mês {meses}?"))
        medias.append(media)
        print(f"A média do mês {meses} foi de {media}")
    return
medias_mes()


    
