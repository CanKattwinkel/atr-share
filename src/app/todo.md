1. Lege eine Route an:
1.1 ng g m routes/home --routing
1.2 ng g c routes/home

2. Binde die Route via Lazy Loading ein.
2.1 home-routing.module.ts: Lade die Komponente unter dem pfad '' 
2.2 app-routing.module.ts: Lade das Modul über loadChildren
2.3 Generiere 25 Lipsum Paragraphen (Zen Coding!) https://de.lipsum.com/ in der Home Component 
2.4 Verifiziere, dass unter http://localhost:4200 die 25 Paragraphen angezeigt werden.

COMMIT! 


3. Binde die Sidebar ein
3.1 mat-sidenav-container.page[autosize]>.content+mat-sidenav.sidenav[opened=true][mode=side]>app-menu im app Menu, verschachtel das router-outlet korrekt
3.2 Binde das MatSidenavModule ein
3.3 Erstelle die Komponente app-menu unter app/common/ in einem eigenen Modul (MenuModul) (Export!)
3.4 Überprüfe das Ergebnis im Browser ("menu works!" & kein Runtime Fehler)

COMMIT! 

4. Binde in der Menu Component einen Hamburger Button ein, nutze dazu https://www.npmjs.com/package/angular-font-awesome
4.1 npm i @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
4.2 Füge die Icons 'faBars' und 'faCoffee' hinzu
4.3 Implementiere einen toggle Button in der menu Komponent, der die Bars als Icon nutzt, lege dazu auch eine leere Methode toggle an.
    ```html
    <button (click)="toggle()">
       ...Icon
    </button>
    ```
4.4 Überprüfe das Ergebnis im Browser ("menu works!" + Hamburger & kein Runtime Fehler)


COMMIT! 


