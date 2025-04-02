#-*- coding:UTF-8 -*-

print ("Me apresente a quantidade de dias, horas, minutos e segundos que te darei a soma de todos os valores convertidos em segundos")
dias = int(input("Qual a quantidade de dias?"))
horas = int(input("Qual a quantidade de horas?"))
minutos = int(input("Qual a quantidade de minutos"))
segundos = int(input("Qual a quantidade de segundos"))
dias_segundos = dias*86400
horas_segundos = horas*3600
minutos_segundos = minutos*60
total_em_segundos = segundos + dias_segundos + horas_segundos + minutos_segundos
print ("A soma dos valores convertidos em segundos resultou em:",total_em_segundos)
