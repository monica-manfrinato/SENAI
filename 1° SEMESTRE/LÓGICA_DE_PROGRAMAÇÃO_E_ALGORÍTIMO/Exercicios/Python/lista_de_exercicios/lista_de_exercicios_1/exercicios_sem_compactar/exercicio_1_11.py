#-*- coding: UTF-8 -*- 
print("Me dê suas duas notas e te direi se foi aprovado reprovado ou se ficou de recuperação") 

nota1 = float(input("Qual a primeira nota?")) 
nota2 = float(input("Qual a segunda nota?")) 
media = (nota1 + nota2)/2 

if media < 3:
    print("Você foi reprovado!")
elif media >= 3 and media <7:
    print("Você ficou de recuperação")
elif media >=7 and  media <=10:
    print("Você foi aprovado!")
else:
    print("Insira uma nota válida")
