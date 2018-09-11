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


5. Ersetze die Farben  
    ```scss
    /* For use in src/lib/core/theming/_palette.scss */
    $brand-blue: (
      50 : #e4e7eb,
      100 : #bbc4cc,
      200 : #8e9cab,
      300 : #617489,
      400 : #3f576f,
      500 : #1d3956,
      600 : #1a334f,
      700 : #152c45,
      800 : #11243c,
      900 : #0a172b,
      A100 : #689cff,
      A200 : #357bff,
      A400 : #0259ff,
      A700 : #0050e7,
      contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #ffffff,
        400 : #ffffff,
        500 : #cdd5db,
        600 : #cdd5db,
        700 : #cdd5db,
        800 : #cdd5db,
        900 : #cdd5db,
        A100 : #000000,
        A200 : #ffffff,
        A400 : #ffffff,
        A700 : #ffffff,
      )
    );
    $brand-shiny-blue: (
      50 : #e9f0f8,
      100 : #c7daef,
      200 : #a2c2e4,
      300 : #7ca9d9,
      400 : #6096d0,
      500 : #4484c8,
      600 : #3e7cc2,
      700 : #3571bb,
      800 : #2d67b4,
      900 : #1f54a7,
      A100 : #e0ebff,
      A200 : #adcbff,
      A400 : #7aaaff,
      A700 : #619aff,
      contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
      )
    );
    ```
    
5.1 Menu SCSS: 

    ```scss
    
    $primary:       ###TODO: Benutze den color von $app-primary 500)###
    $primary-text:  ###TODO: Benutze den contrast von $app-primary 500)### 
    $active:        ###TODO: Benutze den color von $app-accent 500)### 
    
    
    
    
    :host {
      display: block;
      background-color: $primary;
      min-height: 100%;
      overflow-x: hidden;
    
    
    }
    
    .menu-item {
      padding: 5px;
      color: $primary-text;
      text-decoration: none;
    
      &:hover {
        color: $active;
      }
    }
    
    ```
5.2 die "menuMock" Variable in MenuComponent#items und zeige sie im Template an, Installiere auch das Grid von Bootstrap ode passe die CSS Klassen an (reboot, grid, utilities):
    ```html
    <a
      *ngFor="let item of items"
      class="menu-item p-3 item-container d-flex align-items-stretch"
      [routerLink]="item.target"
    >
      <fa-icon [icon]="['fas','coffee']"></fa-icon>
      <div class="label pl-3">
        {{item.label}}
      </div>
    </a>
    ```
5.3 Überprüfe das Ergebnis im Browser: kein Runtime Fehler  & blaue Sidebar


COMMIT! 



