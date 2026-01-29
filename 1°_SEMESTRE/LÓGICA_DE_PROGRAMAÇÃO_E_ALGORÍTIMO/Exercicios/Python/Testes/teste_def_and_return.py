# -*- coding: UTF-8 -*-
'''
def soma(a, b):
 print(a + b)
soma(2, 9)
soma(7, 8)
soma(10, 15) 
'''
'''
def media():
    num = float(input("Insira o primeiro valor"))
    num2 = float(input("Insira o segundo valor"))
    media = (num + num2)/2
    print("A média dos dois números resulta em: ",media)

media()
'''
'''
def media():
    num = float(input("Insira o primeiro valor"))
    num2 = float(input("Insira o segundo valor"))
    media = (num + num2)/2
    print("A média dos dois números resulta em: ",media)
'''
'''
a = 5 # variável global

def muda_e_imprime():
 a = 7 # variável local
 print("a dentro da função: %d" % a)

# imprime o valor da variável global
print("a antes de mudar: %d" % a)
# imprime o valor da variável local
muda_e_imprime()
# imprime o valor da variável global
print("a depois de mudar: %d" % a)
'''
'''
a = 5 # variável global
def muda_e_imprime():
 global a # variável global
 a = 7
 print("a dentro da função: %d" % a)

print("a antes de mudar: %d" % a)
muda_e_imprime()
print("a depois de mudar: %d" % a)
'''

def muda_e_imprime():
    global a
    return a + 12
print(muda_e_imprime())




