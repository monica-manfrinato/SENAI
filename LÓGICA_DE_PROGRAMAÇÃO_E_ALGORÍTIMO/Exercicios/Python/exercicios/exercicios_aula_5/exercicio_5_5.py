# -*- coding: UTF-8 -*-
'''5) Faça um programa que percorra duas listas e gere uma
terceira com os elementos das duas primeiras.'''

saudacao = [ 'oiii', 'olá!' , 'tudo bem??', 'como você vai?']
parabens = ['parabéns!', 'você foi muito bem!', 'você conseguiu!', 'você é demais']

lista = ["A seguir vou mostrar uma mensagem feliz!"]
lista.extend(['oiii', 'tudo bem??', 'você conseguiu!' ])
x = 0

while x < len(lista):
    print (lista[x])
    x = x + 1
