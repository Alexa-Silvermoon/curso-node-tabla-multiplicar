# Notas
Este es mi primer programa en node

No olvidar reconstruir la carpeta node_modules con el comando:
```
npm install
```

COMANDOS PARA EJECUTAR EN EL CMD:
```
node app.js -b 6 -l -h 15   base de 6, listar en consola, hasta el 15
node app.js -b 4 -l    en donde la base sera 4, se creara un .txt y quiero que me haga un listado en el cmd
node app.js -b 5        en donde la base sera 5, se creara un .txt y NO quiero que me haga un listado en el cmd
-b con alias base
-l con alias listar
-h con alias hasta
node app.js --help      por si necesitas ayuda y descripcion
```

node app.js --help
```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla de multilicar        [number] [required]
  -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
  -h, --hasta    Es el limite de la tabla                    [number] [required]

```