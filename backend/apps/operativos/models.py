from django.db import models
from django.core.validators import RegexValidator


class Ambito(models.Model):
    nombre = models.CharField(max_length=10)
    
    def __str__(self):
        return self.nombre


class Departamento(models.Model):
    nombre = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre
    

class Localidad(models.Model):
    nombre = models.CharField(max_length=150)
    codigo_postal = models.CharField(max_length=10)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE, related_name='localidades')

    def __str__(self):
        return self.nombre


class Nivel_Educativo(models.Model):
    nombre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre
    
    
class Sistema_Gestion(models.Model):
    nombre = models.CharField(max_length=10)
    
    def __str__(self):
        return self.nombre
    
    
class Operativo(models.Model):
    operativos_choices = {
        'Aprender Censal Primaria': 'Aprender Censal Primaria',
        'Aprender Censal Secundaria': 'Aprender Censal Secundaria',
        'Aprender Muestral Primaria': 'Aprender Muestral Primaria',
        'Aprender Muestral Secundaria': 'Aprender Muestral Secundaria',
    }
    
    nombre = models.CharField(choices=operativos_choices)
    descripcion = models.TextField(null=True, blank=True)
    año_lectivo = models.CharField(max_length=4)
    nivel_educativo = models.ForeignKey(Nivel_Educativo, on_delete=models.RESTRICT, related_name='operativos')
    estado = models.BooleanField(default=True)
    
    def __str__(self):
        return f'{self.nombre} - {self.año_lectivo}'
    
        
class Coordinador(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    cbu = models.CharField(
        validators = [
            RegexValidator(
                regex = r'^\d{22}$',
                message = 'El CBU debe contener exactamente 22 dígitos.'
            )
        ],
        max_length = 22,
        null = True
    )
    cuil = models.CharField(
        validators = [
            RegexValidator(
                regex = r'^\d{11}$',
                message = 'El CUIL debe contener exactamente 11 dígitos.'
            )
        ],
        max_length = 11
    )
    telefono = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='coordinadores')
    
    def __str__(self):
        return f'{self.nombre} {self.apellido}'
    
    
class Cabecera(models.Model):
    nombre = models.CharField(max_length=200)
    numero_cabecera = models.IntegerField()
    direccion = models.CharField(max_length=300, null=True)
    departamento = models.ForeignKey(Departamento, on_delete=models.RESTRICT, related_name='cabeceras')
    localidad = models.ForeignKey(Localidad, on_delete=models.RESTRICT, related_name='cabeceras')
    coordinador = models.ForeignKey(Coordinador, on_delete=models.SET_NULL, null=True, related_name='cabeceras')
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='cabeceras')
    estado = models.BooleanField(default=True)    
    
    def __str__(self):
        return f'{self.numero_cabecera} - {self.nombre}'
    
    
class Veedor(models.Model):
    cargo_choices = {
        'Rector': 'Rector',
        'Director': 'Director',
        'Personal a cargo': 'Personal a cargo'
    }
    
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    cargo = models.CharField(choices=cargo_choices)
    cuil = models.CharField(
        validators = [
            RegexValidator(
                regex = r'^\d{11}$',
                message = 'El CUIL debe contener exactamente 11 dígitos.'
            )
        ],
        max_length = 11,
    )
    telefono = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='veedores')
    
    def __str__(self):
        return f'{self.nombre} {self.apellido}'
    

class Escuela(models.Model):
    cueanexo = models.CharField(
        validators = [
            RegexValidator(
                regex = r'^\d{9}$',
                message = 'El Cueanexo debe contener exactamente 9 dígitos.'
            )
        ],
        max_length = 9
    )
    nombre = models.CharField(max_length=200)
    ambito = models.ForeignKey(Ambito, on_delete=models.RESTRICT, related_name='escuelas')
    sistema_gestion = models.ForeignKey(Sistema_Gestion, on_delete=models.RESTRICT, related_name='escuelas')
    nivel_educativo = models.ForeignKey(Nivel_Educativo, on_delete=models.RESTRICT, related_name='escuelas')
    direccion = models.CharField(max_length=300, null=True)
    telefono = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)
    departamento = models.ForeignKey(Departamento, on_delete=models.RESTRICT, related_name='escuelas')
    localidad = models.ForeignKey(Localidad, on_delete=models.RESTRICT, related_name='escuelas')
    cabecera = models.ForeignKey(Cabecera, on_delete=models.SET_NULL, null=True, related_name='escuelas')
    veedor = models.ForeignKey(Veedor, on_delete=models.SET_NULL, null=True, related_name='escuelas')
    estado = models.BooleanField(default=True)
    
    def __str__(self):
        return self.nombre
    
    
class Aplicador(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    ambito = models.ForeignKey(Ambito, on_delete=models.RESTRICT, related_name='aplicadores')
    cuil = models.CharField(
        validators = [
            RegexValidator(
                regex = r'^\d{11}$',
                message = 'El CUIL debe contener exactamente 11 dígitos.'
            )
        ],
        max_length = 11
    )
    telefono = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='aplicadores')

    def __str__(self):
        return f'{self.nombre} {self.apellido}'
    

class Seccion(models.Model):
    turno_choices = {
        'Mañana': 'Mañana',
        'Tarde': 'Tarde',
        'Mañana extendida': 'Mañana extendida',
        'Tarde extendida': 'Tarde extendida',
        'Jornada completa': 'Jornada completa',
        'Jornada extendida': 'Jornada extendida',
        'Vespertino': 'Vespertino',
        'Nocturno': 'Nocturno'
    }
    nombre = models.CharField(max_length=50)
    año = models.CharField(max_length=2) # Año de la seccion no año lectivo
    turno = models.CharField(choices=turno_choices)
    matricula = models.IntegerField()
    aplicador = models.ForeignKey(Aplicador, on_delete=models.SET_NULL, null=True, related_name='secciones')
    escuela = models.ForeignKey(Escuela, on_delete=models.CASCADE, related_name='secciones')
    
    def __str__(self):
        return f'{self.año}° - {self.nombre}'
    

class Cruce(models.Model):
    seccion_uno = models.ForeignKey(Seccion, on_delete=models.CASCADE, related_name='cruces_seccion_uno')
    seccion_dos = models.ForeignKey(Seccion, on_delete=models.CASCADE, related_name='cruces_seccion_dos')
    aplicador_uno = models.ForeignKey(Aplicador, on_delete=models.CASCADE, related_name='cruces_aplicador_uno')
    aplicador_dos = models.ForeignKey(Aplicador, on_delete=models.CASCADE, related_name='cruces_aplicador_dos')
    observaciones = models.TextField(null=True, blank=True)
    estado = models.BooleanField(default=True)
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='cruces')
    
    def __str__(self):
        return f'{self.seccion_uno.escuela.nombre} - {self.seccion_uno.nombre} | {self.seccion_dos.escuela.nombre} - {self.seccion_dos.nombre}'
    

class Datos_Estadisticos(models.Model):
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='datos_estadisticos')
    matricula_total = models.IntegerField()
    presentes_total = models.IntegerField()
    escuelas_total = models.IntegerField()
    escuelas_retiraron_total = models.IntegerField()
    secciones_total = models.IntegerField()
    aplicadores_total = models.IntegerField()
    veedores_total = models.IntegerField()
    
    def __str__(self):
        return f'Datos estadisticos del operativo {self.operativo.nombre} {self.operativo.año_lectivo}'
    

class Foto(models.Model):
    archivo = models.FileField(upload_to='fotos_de_operativos/')
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='fotos')
    
    def __str__(self):
        return self.archivo    
    
    
class Material(models.Model):
    archivo = models.FileField(upload_to='material/')
    operativo = models.ForeignKey(Operativo, on_delete=models.CASCADE, related_name='materiales')
    
    def __str__(self):
        return self.archivo