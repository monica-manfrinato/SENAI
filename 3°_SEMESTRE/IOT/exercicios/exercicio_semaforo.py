from machine import Pin
from utime import sleep

ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

ledVermelho.value(0)
ledAmarelo.value(0)
ledVerde.value(0)

#forma 1:
while True:
    #Semáforo ABRIU
    ledVerde.value(1)
    ledAmarelo.value(0)
    sleep(3)
   
    #Semáforo ATENÇÃO
    ledVerde.value(0)
    ledAmarelo.value(1)
    sleep(1)
   
    #Semáforo FECHADO
    ledAmarelo.value(0)
    ledVermelho.value(1)
    sleep(2)
    
    
#forma 2:
#ordem = [(ledVerde,3),(ledAmarelo, 1),(ledVermelho,2)]

#while True:
    #for led, tempo in ordem:
        #led.value(1)
        #sleep(tempo)
        #led.value(0)
    
#forma 3:
    #semaforo_caboVerde = [Pin(16, Pin.OUT),3, Pin(18, Pin.OUT), Pin(17, Pin.OUT)]
#tempos = [3,2,1]

#while True:
    #for i in range(len(semoforo_caboVerde)):
       #semoforo_caboVerde[i].toggle()
        #sleep(tempos[i])
        #semoforo_caboVerde[i].toggle()