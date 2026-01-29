'''9) Escreva um programa, com uma função que imprima o
conceito de um aluno, dada a sua nota. Supor, apenas,
notas inteiras. O critério para conceitos é o seguinte:
Nota Conceito
notas inferiores a 3 --> Conceito E
notas de 3 a 5 --> Conceito D
notas 6 e 7 --> Conceito C
notas 8 e 9 --> Conceito B
nota 10 --> Conceito A'''

#-*- coding: UTF-8 -*-

print ("Me dê a sua nota INTEIRA e te darei em qual conceito você se encaixa!")

def conceito ():
    nota = int(input("Insira a sua nota inteira: "))
    if nota >= 0 and nota < 3:
        print("Você se enquadra no conceito E")
    elif nota >=3 and nota <= 5:
        print("Você se enquadra no conceito D")
    elif nota == 6 or nota == 7:
        print("Você se enquadra no conceito C")
    elif nota == 8 or nota == 9:
        print("Você se enquadra no conceito B")
    elif nota == 10:
        print("Você se enquadra no conceito A! Parabéns!")
    else:
        print("Insira uma nota válida!")

conceito()
