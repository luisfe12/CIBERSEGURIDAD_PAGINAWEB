import json
from re import A


def Numero_serial(number):

    fileObject = open("C:/Users/luisfe/Documents/SEGUIRDAD_PROYECTOC1/SEGURIDAD/SEGURIDAD/json-archivos/firefox-trust-store.json", "r")
    jsonContent = fileObject.read()
    aList = json.loads(jsonContent)
    #print(aList)


    for json_part in aList:

        print(number +  " -------- " + json_part["Certificate Serial Number"])

        if number == json_part["Certificate Serial Number"]:
            return True
    return False





