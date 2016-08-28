// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.consultas', {
    url: '/consultas',
    views: {
      'menuContent': {
        templateUrl: 'templates/consultas.html'
      }
    }
  })

  .state('app.historico', {
    url: '/historico',
    views: {
      'menuContent': {
        templateUrl: 'templates/historico.html'
      }
    }
  })

  .state('app.consultas-show', {
    url: '/consultas-show',
    views: {
      'menuContent': {
        templateUrl: 'templates/consultas-show.html'
      }
    }
  })

  .state('app.consultas-show-historico', {
    url: '/consultas-show-historico',
    views: {
      'menuContent': {
        templateUrl: 'templates/consultas-show-historico.html'
      }
    }
  })

  .state('app.consulta-new', {
    url: '/consulta-new',
    views: {
      'menuContent': {
        templateUrl: 'templates/consulta-new.html'
      }
    }
  })

  .state('app.cartao-digital', {
    url: '/cartao-digital',
    views: {
      'menuContent': {
        templateUrl: 'templates/cartao-digital.html'
      }
    }
  })

  .state('app.guia-medico', {
    url: '/guia-medico',
    views: {
      'menuContent': {
        templateUrl: 'templates/guia-medico.html'
      }
    }
  })

  .state('app.medico-detalhes', {
    url: '/medico-detalhes',
    views: {
      'menuContent': {
        templateUrl: 'templates/medico-detalhes.html'
      }
    }
  })

  .state('app.boleto', {
    url: '/boleto',
    views: {
      'menuContent': {
        templateUrl: 'templates/boleto.html'
      }
    }
  })

  .state('app.cadastro', {
    url: '/cadastro',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadastro.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
