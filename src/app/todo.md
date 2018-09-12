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
3.5 Lass .content scrollen (AppComponent)
    ```scss
    .page {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }
    
    .content {
      height: 100%;
    }
    
    .sidenav{
      height: 100%;
    }
    
    
    ```
3.6 Setze zudem den Body auf overflow hidden (GLOBAL!)
3.7 Überprüfe das Ergebnis im Browser ("menu works!", content scrollt & kein Runtime Fehler)

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




6 Statisches auf und zu klappen:
6.1 Führe im MenuComponent das boolsche Feld isExpanded ein.
6.2 Toggle dieses in der Toggle Methode
6.3 Setze eine Klasse im CSS wenn isExpanded = true
6.4 Setze für das Host Element eine Breite von 50 Pixeln
6.5 Wenn auf dem Host Element die Klasse 'menu-expanded' gesetzt ist, setze die Breite auf 250 Pixel
6.6 Überprüfe das Ergebnis im Browser: kein Runtime Fehler  & Sidebar erweitert sich sofort bei Klick

COMMIT! 





7 Animation Vorbereitung
7.1 Erweitere den MenuComponent:

    ```
    const animationDuration = 500;
    
    @Component({
      selector: 'app-menu',
      templateUrl: './menu.component.html',
      styleUrls: ['./menu.component.scss'],
      animations: [
        trigger('sidenavTransition', [
          state('inactive', style({
            width: '52px',
          })),
          state('active', style({
            width: '250px',
          })),
          transition('inactive => active', animate(`${animationDuration}ms ease-in`)),
          transition('active => inactive', animate(`${animationDuration}ms ease-out`))
        ])
      ]
    
    })
    ```
7.2 Setze über ein HostBinding die SidenavTransaction und erfüle in der Methode die Signatur

    ```
 
    @HostBinding('@sidenavTransition') get sidenavTransition(): 'inactive'  |  'active' {
    }
    
      
    ```
7.3 Überprüfe das Ergebnis im Browser: kein Runtime Fehler  & Sidebar erweitert sich animiert bei Klick - content springt

COMMIT! 


8 Abrunden
8.1 Füge den ChangeDetectorFix hinzu
    ```
     of(0, animationFrame)
          .pipe(
            repeat(),
            takeUntil(
              timer(animationDuration),
            ),
          )
          .subscribe(() => this.cdf.markForCheck());
          
    
    ```
8.2 Beweise das dieser Stream kein Menory Leak erzeugt
8.3 Bonusaufgabe: Stoppe den "alten Stream" bei jedem erneuten Klick auf toggle. Dazu benötigst du ein Subject, und den operator `merge()`.
    Zum Beweis kanst du die animationDuration auf 2 Sekunden stellen.

8.4 Done!

COMMIT! 


9. Benutze Materials Mixins
9.1 Erstelle die Komponent ColorPanel (eignes Modul unter Common)
9.2 In sie soll Content injiziert werden können, nutze dafür Transclusion mit ng-content
9.3 Füge folgenden Mixin Aufruf hinzu, leite mit deiner Klasse `_AppPanelMixinBase` ab und erfülle die Konstruktorsignatur

    ```ts
    
    /** @docs-private */
    export class AppColorPanelBase {
      constructor(public _elementRef: ElementRef) {
      }
    }
    
    export const _AppPanelMixinBase = mixinColor(AppColorPanelBase);
    
    ```
9.4 Füge den Input hinzu, da das Feld bereits existiert bereits daher benötigst du nur `inputs: ['color'],` in der Component Decoration oder du überschreibst das Feld der Parent Class (Typ: `ThemePalette`).
9.5 Binde die Componente im HomeComponent 3x ein und benutze color={primary, accent, warn}
9.6 Setze jeweils einen P Tag mit Text in die neu eingebundene Komponente
9.7 Implementiere die dazu notwendigen CSS Selektoren im color-panel.component (`.mat-primary`, `.mat-accent`, `.mat-warn`), Beachte: die Klasse wird auf dem Host gesetzt.
9.8 Verwende jeweils `mat-contrast` und `mat-color` aus `@import "~@angular/material/theming";`
9.9 An das Warn Theme kommst du in der `_colors.scss` Datei, erstelle hier die Variable  `$app-warn` und fülle sie über `map-get` :  `$app-theme, warn`
