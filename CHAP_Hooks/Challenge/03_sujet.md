# 03 sujet Challenge Calculatrice

Vous allez faire une petite calculatrice en utilisant **useReducer**.

Utilisez les dépendances suivantes supplémentaires :

1. On choix si vous vous sentez découvrir la CRA vous l'utilisez dans ce cas regardez le dossier Support_cra ou utilisez un fichier simple comme vu en cours.

Oragnisez l'application comme suit si vous utilisez la CRA

```text
components/
    Calculator.js <-- Dans ce composant utilisez useReducer

App.js
```

Créez un champ de saisi fictif et 10 boutons de 0 à 9 pour afficher dans la partie "saisie" le nombre tapé. Créez les trois boutons suivants :

1. Un bouton + pour effectuer l'addition.

2. Un bouton - pour effectuer la soustraction.

3. Un bouton X pour faire la multiplication.

Implémentez également les boutons proposés dans le Wireframe ci-dessous.


```text
[ 9182 ]  <-- champ texte

[7] [8] [9]   <-- Bouton cliquable pour afficher un nombre 

[4] [5] [6]

[1] [2] [3]

[0]

[+] [-] [*] <-- Lorsque vous cliquez sur un bouton de type opération alors le champ de saisi s'efface
[=]
[Reset]
```

## Annexes

Pour les styles globaux vous devez les définir dans le fichier Globals.js dans le dossier Style. Vous pouvez les compléter.

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
  body {
    margin: 2rem;
    background: #0D0C1D;
    color: #EFFFFA;;
    font-family: system-ui;
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
```

Puis les insérer dans le composant racine  App.js, ils s'appliqueront à l'ensemble des composants.

```js
 <>
<GlobalStyle />
<div>
  // ... 
</div>
</>
```
