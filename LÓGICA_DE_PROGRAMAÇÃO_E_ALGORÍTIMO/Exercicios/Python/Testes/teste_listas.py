# -*- coding: UTF-8 -*-


'''
predio = ["térreo", "primeiro andar", "segundo andar", "terceiroandar", "quarto andar", "quinto andar"]

#posição 2 == segundo andar, pois o 0 também é uma posição
print (predio[0])
print (predio[1])
print (predio[2])
print (predio[3])
print (predio[4])
print (predio[5])

print(predio)
'''
'''
# -*- coding: UTF-8 -*-

notas = [6, 7, 5, 8, 9]

soma = 0
x = 0

while x < 5:
    soma += notas[x]
    x += 1
print ("Média: %5.2f" % (soma / # -*- coding: UTF-8 -*-
'''
'''
numeros = [0, 0, 0, 0, 0]

x = 0

while x < 5:

numeros[x] = int(input("Número %d: " % (x + 1)))

x += 1

while True:

escolhido = int(input("Que posição você quer imprimir (0 para sair): "))

if escolhido == 0:

break

print ("Você escolheu o número: %d" % (numeros[escolhido - 1]))
'''


'''
L = [1, 2, 3, 4, 5]

V = L[:]
print (L)
print(V)

V[0] = 6

print (L)
print (V)

'''


'''
L = [1, 2, 3]
x = 0
while x < len(L): ########### mostrar cada posição da lista separadamente, o x
    print (L[x]) ##### L[x] é utilizado para passar pelas informações DENTRO DA LISTA
    x += 1

'''


''''
L = []
while True:
    n = int(input("Digite um número (0 sai): "))
    if n == 0:
        break
    L.append(n)
x = 0
while x < len(L): #mostrar os valores até que a quantidade de valores seja menor doq a variável
    print (L[x])
    x = x + 1

'''


'''
L = ["a"]
L.append("b")
print (L)
L.extend(["c"])
print (L)
L.append(["d", "e"])
print (L)
L.extend(["f", "g", "h"])
print (L)
'''

'''

L = ["a", "b", "c"]
del L[1]
print (L)
del L[0]
print (L)
print(L[0])

'''

'''
L = list(range(101))
print (L)
del L[1:99]
print (L)

'''


'''
L = [8, 9, 15]
for e in L:
 print (e)
'''

numeros = [2, 5, 3.14, 1, -7]
numeros.sort()
print (numeros)
animais = ["macacos", "gatos", "cachorros", "ursos",
"elefantes"]
animais.sort()
print (animais)
















