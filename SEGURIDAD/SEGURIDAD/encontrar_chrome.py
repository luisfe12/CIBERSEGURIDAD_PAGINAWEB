import json
from re import A


def encontrar_sha_Cn(sha, Cn):

    fileObject = open("C:/Users/luisfe/Documents/SEGUIRDAD_PROYECTOC1/SEGURIDAD/SEGURIDAD/json-archivos/firefox-trust-store.json", "r")
    jsonContent = fileObject.read()
    aList = json.loads(jsonContent)
    #print(aList)


    for json_part in aList:

        print(sha +  " -------- " + json_part["Certificate Serial Number"])

        if sha == json_part["SHA 256 Hash"] and Cn == json_part["Subject"]:
            return True
    return False
