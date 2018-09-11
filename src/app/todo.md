1. Lege eine Route an:
1.1 ng g m routes/home --routing
1.2 ng g c routes/home

2. Binde die Route via Lazy Loading ein.
2.1 home-routing.module.ts: Lade die Komponente unter dem pfad '' 
2.2 app-routing.module.ts: Lade das Modul über loadChildren
2.3 Generiere 25 Lipsum Paragraphen (Zen Coding!) https://de.lipsum.com/ in der Home Component 
2.4 Verifiziere, dass unter http://localhost:4200 die 25 Paragraphen angezeigt werden.

