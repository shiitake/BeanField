import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'cards',        moduleId: './cards/cards',       nav: true, title:'Cards' },
      { route: 'deck',  moduleId: './deck/deck', nav: true, title:'Deck' }
    ]);

    this.router = router;
  }
}
