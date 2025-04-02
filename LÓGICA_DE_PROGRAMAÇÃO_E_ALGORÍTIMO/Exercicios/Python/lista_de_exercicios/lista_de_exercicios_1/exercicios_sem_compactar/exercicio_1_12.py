#-*- coding: UTF-8 -*-  

print("Me dê dois valores inteiros e os reproduzirei em ordem crescente")  
num1 = int(input("Qual o primeiro número?"))
num2 = int(input("Qual o segundo número?"))

if num1 > num2:
    a = num2
    b = num1
    print("A sequência é", a, "e", b)
elif num2 > num1:
    a = num1
    b = num2
    print("A sequência é", a, "e", b)
else:
    print("Os dois números são iguais! então a sequência não importa...")
