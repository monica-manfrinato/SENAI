'''Faça um programa para exibir a tabuada de 0 a 9. '''

print("Vou te mostrar toda a tabuada do 0 até o 9")

x = 0
y = 0

for x in range (0,10):
    
    for y in range (0,11):
        print (x, "x", y ,"=", x*y)
        
        y = y+1

        
