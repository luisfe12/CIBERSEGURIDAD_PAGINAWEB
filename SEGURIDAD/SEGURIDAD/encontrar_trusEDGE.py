import json
from re import A


def SHA_UNO(sha):

    fileObject = open("C:/Users/luisfe/Documents/SEGUIRDAD_PROYECTOC1/SEGURIDAD/SEGURIDAD/json-archivos/firefox-trust-store.json", "r")
    jsonContent = fileObject.read()
    aList = json.loads(jsonContent)
    #print(aList)


    for json_part in aList:

        print(sha +  " -------- " + json_part["Certificate Serial Number"])

        if sha == json_part["SHA-1 Fingerprint"]:
            return True
    return False

