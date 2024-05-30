#!/bin/bash


#Limpiamos el directorio de produccion 
echo "Limpiando directorio de Release..."
rm -rf Release
echo "Volcando Entorno de Desarrollo en Release..."
mkdir Release
cp -r Desarrollo/* Release/
#echo "Ofuscando y minificando código (.js y .css)..."
#cd Release/public_html 
#grunt

