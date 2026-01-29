#-*- coding: UTF-8 -*-
print("Me dê as informações abaixo e veja quanto tempo de vida você perdeu por ter fumado")
cigarros = int(input("Quantos cigarros em média você fuma por dia?"))
anos = float(input("Há quantos anos você fuma?"))
minutos = (cigarros*10)*(anos*365)
dias = minutos//1440
print("Com a quantidade de cigarros que você fumou, acabou perdendo cerca de %i dias de vida..." %dias )
