#Prvi js paket Neetovaca

###Opis
React pričica samostalno složena za produkciju

##Instalacija

```
npm install
```

Nakon instalacije stvorit će vam se node module folder te ćete kako imate sve potrebno odmah pokreniti app.

##Nadogradnja app-a
Čim krenete nadodavati novi kod u `src/` folder potrebno je korisiti naredbu od babel-cli:

```
npx babel --watch src --out-dir . --presets @babel/preset-react
```

##Neobvezni domaći za do subote
Promijenite arhitekturu App-a na način da u public folderu kojeg ćete ručno stvoriti završe automatski nakon transpile-acije App.js i Button.js skripte. Također ručno u public folder prebacite i index.html

Ugodan rad :-)
