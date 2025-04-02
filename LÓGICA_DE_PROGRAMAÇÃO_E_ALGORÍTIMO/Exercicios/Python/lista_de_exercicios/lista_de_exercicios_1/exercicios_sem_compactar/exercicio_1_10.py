#-*- coding: UTF-8 -*- 
print("Me dê três valores para lados de um triângulo e te direi se pode ou não formar um, e qual triângulo seria")
lado_1 = float(input("Qual o primeiro valor?"))
lado_2 = float(input("Qual o segundo valor?"))
lado_3 = float(input("Qual o terceiro valor?"))

if lado_1 + lado_2 < lado_3 or lado_1 + lado_3 <lado_2 or lado_2 + lado_3 < lado_1:
    print ("Os dados inseridos não podem configurar um triângulo!")

###Tipo de triângulo###

elif lado_1 == lado_2 == lado_3:
    print ("Os lados inseridos correspondem a um triângulo equilátero!")
    
elif lado_1 != lado_2 != lado_3:
    print ("Os lados inseridos correspondem a um triângulo escaleno!") 
  
else:  
    print ("Os lados inseridos correspondem a um triângulo isósceles!")
