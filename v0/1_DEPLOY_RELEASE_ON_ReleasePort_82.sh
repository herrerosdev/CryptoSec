#!/bin/bash

# Traemos un fichero desde el servidor a nuestro PC (Ejecutar terminal con administrador)
#Para que no pida la pass del server necesitamos tener las key-pairs rsa
echo "Ofuscando y minificando código (.js y .css)..."
echo
cd Release/public_html 
#grunt
cd ..

#Parametros de entrada (modificar en funcion del proyecto, servidor etc..) 
Server_USER="ubuntu"
Server_IP="146.59.197.28"
#Nombre del proyecto
Project_name="ReleasePort"
#Production Path
Production_Path="PRODUCTION_DIRECTORIES/${Project_name}/"
#Port SSH
SSH_Port="8375"



#Formato de credenciales para acceder al servidor por SSH
Server_SSH="${Server_USER}@${Server_IP}" 
#SERVER PRODUCTION LOCATION
Production_Dir="${Server_SSH}:${Production_Path}"
#Carpetas del proyecto
Project_folders=( public_html/* resources/*)
#Archivos que no se suben a produccion (Se excluyen)
Excludes_FILES=(
    "public_html/node_modules"
    "public_html/logs"
    "public_html/Gruntfile.js",
"resources/doc")

#Informamos de lo que se va a hacer 
echo "Desplegando ${Project_name} en el entorno de producción ${Production_Dir}" 
echo
echo
#Limpiamos el directorio de produccion 
echo "Limpiando directorio..."
ssh -p ${SSH_Port} ubuntu@146.59.197.28 "rm -rf ${Production_Path}/*" 

#Creamos las carpetas padre del proyecto en el directorio del servidor
echo "Creando carpetas..."
echo
ssh -p ${SSH_Port} ${Server_SSH} "mkdir -p ${Production_Path}public_html/"
ssh -p ${SSH_Port} ${Server_SSH} "mkdir -p ${Production_Path}public_html/logs"
ssh -p ${SSH_Port} ${Server_SSH} "chmod 777 ${Production_Path}public_html/logs" #le damos permisos a la carpeta logs
ssh -p ${SSH_Port} ${Server_SSH} "mkdir -p ${Production_Path}resources/"

#Recorremos los directorios de nuestro proyecto y vamos subiendolos a las carpetas del servidor
echo "Transferiendo archivos a produccion..."
echo
for File in "public_html"/*
do
    
    if [[ ${Excludes_FILES[*]} =~ $File ]] #=~match regex
    then
        
        echo "Archivo excluído $File"
        
    else
        
        echo "Subiendo directorio $File"
        scp -P ${SSH_Port} -r $File "${Production_Dir}public_html"
    fi
    
    echo
done

#Recorremos los directorios de nuestro proyecto y vamos subiendolos a las carpetas del servidor
for File in "resources"/*
do
    
    if [[ ${Excludes_FILES[*]} =~ $File ]] #=~match regex
    then
        
        echo "Archivo excluído $File"
        
    else
        
        echo "Subiendo directorio $File"
        scp -P ${SSH_Port} -r $File "${Production_Dir}resources"
    fi
    
    echo
done


#start https://stackoverflow.com
