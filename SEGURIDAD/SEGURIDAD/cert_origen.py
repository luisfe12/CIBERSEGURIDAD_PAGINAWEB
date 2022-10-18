from multiprocessing import connection
from oscrypto import tls
from certvalidator import CertificateValidator, errors

nuevo_link = ""
def reducir_link(link):
    for caracter in range(8, len(link)):
        #print(caracter)
        #print(link[caracter])
        if link[caracter] == '/':
            nuevo_link = link[8:caracter]
            break
    print(nuevo_link)
    return Certifcado_original(nuevo_link)


def Certifcado_original(link):
    session = tls.TLSSession(manual_validation=True)
    connection = tls.TLSSocket(link, 443, session=session)

    try:
        validator = CertificateValidator(connection.certificate, connection.intermediates)
        print(validator._path)
        resultado = validator.validate_tls(connection.hostname)
        certi_origen = resultado.__getitem__(0)
        print("certificado origen {}".format(certi_origen.serial_number))
        hexdecimal_number = hex(certi_origen.serial_number)
        print(str(hexdecimal_number))
        return str(hexdecimal_number)
        
    except(errors.PathValidationError):
        print("Quizo no hizo match o puede que el certificado no este validado")  
        return "no se pudo encontrar"

def Certifi_Origen(link):
    return reducir_link(link)