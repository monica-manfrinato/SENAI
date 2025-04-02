"""2 - Escreva um algoritmo em que leia um número e imprima a raiz quadrada do número
caso ele seja positivo ou igual a zero e o quadrado do número caso ele seja negativo. Obs:
Usar a biblioteca math.h."""
'''
1- Pedir os valores
2- Confirmar se ele é positivo ou igual a zero --> fazer a raiz quadrada
3- Confirmar se ele é negativo --> fazer quadrado dele
4- Imprimir resultdos
'''
import math

print('''Me dê um número e realizarei um cálculo seguindo as seguintes normas:
1 - Se ele for positivo ou igual a 0, realizarei a raiz quadrada
2 - Se ele for negativo encontrarei qual o seu quadrado
''')
valor = float(input("Qual será o valor?"))
if valor >= 0:
    raiz_quadrada = math.sqrt(valor)
    print("O valor da raiz quadrada é de", raiz_quadrada)

else:
    potenciacao = valor**2
    print("O valor da potenciação é de",potenciacao)
    
