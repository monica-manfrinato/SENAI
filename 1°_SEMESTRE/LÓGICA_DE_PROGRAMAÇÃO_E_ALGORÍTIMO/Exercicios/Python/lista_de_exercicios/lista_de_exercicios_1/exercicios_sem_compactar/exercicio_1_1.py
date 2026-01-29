"""1 - Construir um algoritmo que leia dois números e efetue a adição. Caso o valor somado
seja maior que 20, este deverá ser apresentado somando-se a ele mais 8; caso o valor
somado seja menor ou igual a 20, este deverá ser apresentado subtraindo-se 5."""
"""
1- Pegar dois valores
2- somar os valores
3- se resultado > 20: somar com 8
4- se resultado <= 20: subtrair 5 
5- apresentar resultados
"""

#-*- coding: UTF-8 -*-

print("Me dê dois valores e realizarei uma adição seguindo alguns padrões:")
valor1 = float(input("Qual o primeiro valor?"))
valor2 = float(input("Qual o segundo valor?"))
soma = valor1 + valor2
if soma > 20:
    adicao_8 = soma + 8
    print("O resultado da soma, adicionando 8 resulta em",adicao_8)

if soma <= 20:
    subtracao_5 = soma - 5
    print("O resultado da soma, subtraindo 5 resulta em",subtracao_5)
