'''x = 1  

while x <= 5:  
    print(x)  
    x = x + 1 
'''
######################################################
'''
fim = int(input("Digite o último número a imprimir: "))
x = 1
while x <= fim:
     print(x)
     x = x + 1
'''
######################################################
'''
fim = int(input("Digite o último número a imprimir: "))
x = 0
while x <= fim:
    if x % 2 == 0:
        print(x)
    x = x + 1
'''
######################################################
"""
fim = int(input("Digite o último número a imprimir: "))
x = 0
while x <= fim:
    print(x)
    x = x + 2
"""
######################################################

'''
# -*- coding: UTF-8 -*-

n = int(input("Tabuada de: "))
x = 0
while x <= 10:
    #print (n, "x", x, "=", (n * x))
    print(f" {n} x {x} = {n*x}")
    x = x + 1

'''
######################################################
'''
# -*- coding: UTF-8 -*-
n = 1
soma = 0
while n <= 10:
    x = int(input("Digite o %d número: " % n))
    soma = soma + x
    n = n + 1
print ("Soma: %d" % soma)
'''
######################################################
s = 0
while True:
    v = int(input("Digite um número a somar ou 0 para sair: "))
    if v == 0:
        print("Ahhh você quer parar??? tudo bem :( esse foi o seu resultado: ")
        break
s = s + v
print ("O resultado da sua soma é", s)





    
