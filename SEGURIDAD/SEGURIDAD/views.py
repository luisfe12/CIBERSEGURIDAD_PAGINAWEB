from asyncore import read
from multiprocessing import context
from pipes import Template
from re import template
from urllib import request
from xml.dom.minidom import Document
from django.http import HttpResponse
import datetime
from django.template import Template, Context
from django.template import loader #importamosmcargador de template(plantillas)
from django.shortcuts import render
from SEGURIDAD.librerias_anlisis import validarURL
from SEGURIDAD.http_o_https import ver_tipod_link
from SEGURIDAD.encontrar_trustFIREFOX import Numero_serial
from SEGURIDAD.cert_origen import Certifi_Origen
from SEGURIDAD.cert_CN import Nombre_Comun
#from .forms import U

estado_link = None

#Arreglo que contien los link validos y analizados
array_links = []




#funcion que se encarga de encontrar el certificado raiz del Vhrome y EDGE
def raiz_chorme_edge(link):
    Nombre_Comun(link)

#funcion que se encarga de encontrar el certificado raiz del firefox
def raiz_firefox(link):
    numero = Certifi_Origen(link)
    retorno = Numero_serial(numero)

    if retorno == True:
        nivel_de_confianzaFr = nivel_de_confianzaFr + 1
        print("si se encontro en el trut de firefox")
    else:
        print("no se encontro")

def analisis_link(valor):
    
    #variable para medir el nivel de confianza de la pagina web en el navegador
    #si solo tiene 1 el nivel es inseguro
    # si tene 2 el navegador el parcialemnte seguro
    #si tiene 3 sognifica que el navegador es seguro
    nivel_de_confianzaCh = 0 
    nivel_de_confianzaFr = 0
    nivel_de_confianzaEd = 0

    if validarURL.Validar(valor) == True:
        array_links.append(valor)
        nivel_de_confianzaCh = nivel_de_confianzaCh + 1
        nivel_de_confianzaFr = nivel_de_confianzaFr + 1
        nivel_de_confianzaEd = nivel_de_confianzaEd + 1
        if ver_tipod_link(valor) == 'https':
            estado_link = 'entro'
            nivel_de_confianzaFr = nivel_de_confianzaFr + 1
            
            raiz_firefox(valor)
            

            
        elif ver_tipod_link(valor) == 'http':
            print("link sin seguridad")
    else:
        estado_link = 'no entro'
        print("link invalido")
    print("links ingresados \t", array_links)
    
    #Se reinicia los valores de confianza para ser usados por un nuevo link
    nivel_de_confianzaCh = 0 
    nivel_de_confianzaFr = 0
    nivel_de_confianzaEd = 0

def get_inputS(request):
    valor = request.POST.get("lkbus")
    analisis_link(valor)
    #validarURL.Validar(valor)
    #array_links.append(valor)
    return render(request, "index.html")