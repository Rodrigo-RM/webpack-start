# webpack-start

DESPLEGAR EL PROYECTO A GITHUB

Cascarón de Aplicaciones con WebPack
- ---
### Notas:
- ---
Recuerden reconstruir los módulos de Nore
```
npm install
```
Y para construir la carpeta Dist para producción:
```
npm run build
```

- ---

### GitHub
- ---

* PREPARE todos los archivos del proyecto  para una foto 
    > git add .
* Foto del Proyecto: foto del proyecto en este momento... respaldo de ese momento ( m indica mensaje "... ")
    > git commit -m "Primer-Commit" 

* Reconstruir el commit
    > git checkout -- .

* Verificar los commit activos, en el directorio del proyecto
    > git log

    > git status

* Aplicar …or push an existing repository from the clscommand line
* Activa Enlace con GitHub
    > git remote add origin https://github.com/Rodrigo-RM/webpack-start.git

    > git branch -M main

    > git push -u origin main

* Después sólo se requiere usar: git push

* Ante algún ERROR como: > fatal: remote origin already exists.
* Revisar Link:

    - https://www.datree.io/resources/git-error-fatal-remote-origin-already-exists

    - Aplicar:

    > git remote set-url origin https://github.com/Rodrigo-RM/webpack-start.git

    - Para eliminar todo del cache:

    > git remote remove origin
