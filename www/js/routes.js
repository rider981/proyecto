angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('BIENVENIDO', {
    url: '/page1',
    templateUrl: 'templates/BIENVENIDO.html',
    controller: 'BIENVENIDOCtrl'
  })

  .state('tablaPeriDica', {
    url: '/',
    templateUrl: 'templates/tablaPeriDica.html',
    controller: 'tablaPeriDicaCtrl'
  })

  .state('metales', {
    url: '/page3',
    templateUrl: 'templates/metales.html',
    controller: 'metalesCtrl'
  })

  .state('metaloides', {
    url: '/page4',
    templateUrl: 'templates/metaloides.html',
    controller: 'metaloidesCtrl'
  })

  .state('noMetales', {
    url: '/page22',
    templateUrl: 'templates/noMetales.html',
    controller: 'noMetalesCtrl'
  })

  .state('alcalinos', {
    url: '/page7',
    templateUrl: 'templates/alcalinos.html',
    controller: 'alcalinosCtrl'
  })

  .state('alcalinotRreos', {
    url: '/page8',
    templateUrl: 'templates/alcalinotRreos.html',
    controller: 'alcalinotRreosCtrl'
  })

  .state('lactNidos', {
    url: '/page9',
    templateUrl: 'templates/lactNidos.html',
    controller: 'lactNidosCtrl'
  })

  .state('actNidos', {
    url: '/page10',
    templateUrl: 'templates/actNidos.html',
    controller: 'actNidosCtrl'
  })

  .state('metalesDeTransiciN', {
    url: '/page11',
    templateUrl: 'templates/metalesDeTransiciN.html',
    controller: 'metalesDeTransiciNCtrl'
  })

  .state('metalesDelBloqueP', {
    url: '/page12',
    templateUrl: 'templates/metalesDelBloqueP.html',
    controller: 'metalesDelBloquePCtrl'
  })

  .state('otrosNoMetales', {
    url: '/page13',
    templateUrl: 'templates/otrosNoMetales.html',
    controller: 'otrosNoMetalesCtrl'
  })

  .state('gasesNobles', {
    url: '/page14',
    templateUrl: 'templates/gasesNobles.html',
    controller: 'gasesNoblesCtrl'
  })

  .state('queSonLosMetales', {
    url: '/page15',
    templateUrl: 'templates/queSonLosMetales.html',
    controller: 'queSonLosMetalesCtrl'
  })

  .state('litio', {
    url: '/page16',
    templateUrl: 'templates/litio.html',
    controller: 'litioCtrl'
  })

  .state('sodio', {
    url: '/page17',
    templateUrl: 'templates/sodio.html',
    controller: 'sodioCtrl'
  })

  .state('potasio', {
    url: '/page18',
    templateUrl: 'templates/potasio.html',
    controller: 'potasioCtrl'
  })

  .state('rubidio', {
    url: '/page19',
    templateUrl: 'templates/rubidio.html',
    controller: 'rubidioCtrl'
  })

  .state('cesio', {
    url: '/page20',
    templateUrl: 'templates/cesio.html',
    controller: 'cesioCtrl'
  })

  .state('francio', {
    url: '/page21',
    templateUrl: 'templates/francio.html',
    controller: 'francioCtrl'
  })

  .state('berilio', {
    url: '/page23',
    templateUrl: 'templates/berilio.html',
    controller: 'berilioCtrl'
  })

  .state('magnesio', {
    url: '/page24',
    templateUrl: 'templates/magnesio.html',
    controller: 'magnesioCtrl'
  })

  .state('calcio', {
    url: '/page25',
    templateUrl: 'templates/calcio.html',
    controller: 'calcioCtrl'
  })

  .state('estroncio', {
    url: '/page26',
    templateUrl: 'templates/estroncio.html',
    controller: 'estroncioCtrl'
  })

  .state('bario', {
    url: '/page27',
    templateUrl: 'templates/bario.html',
    controller: 'barioCtrl'
  })

  .state('radio', {
    url: '/page28',
    templateUrl: 'templates/radio.html',
    controller: 'radioCtrl'
  })

  .state('lantano', {
    url: '/page30',
    templateUrl: 'templates/lantano.html',
    controller: 'lantanoCtrl'
  })

  .state('cerio', {
    url: '/page31',
    templateUrl: 'templates/cerio.html',
    controller: 'cerioCtrl'
  })

  .state('praseodimio', {
    url: '/page32',
    templateUrl: 'templates/praseodimio.html',
    controller: 'praseodimioCtrl'
  })

  .state('neodimio', {
    url: '/page33',
    templateUrl: 'templates/neodimio.html',
    controller: 'neodimioCtrl'
  })

  .state('prometio', {
    url: '/page34',
    templateUrl: 'templates/prometio.html',
    controller: 'prometioCtrl'
  })

  .state('samario', {
    url: '/page35',
    templateUrl: 'templates/samario.html',
    controller: 'samarioCtrl'
  })

  .state('europio', {
    url: '/page36',
    templateUrl: 'templates/europio.html',
    controller: 'europioCtrl'
  })

  .state('gadolinio', {
    url: '/page37',
    templateUrl: 'templates/gadolinio.html',
    controller: 'gadolinioCtrl'
  })

  .state('terbio', {
    url: '/page38',
    templateUrl: 'templates/terbio.html',
    controller: 'terbioCtrl'
  })

  .state('disprosio', {
    url: '/page39',
    templateUrl: 'templates/disprosio.html',
    controller: 'disprosioCtrl'
  })

  .state('holmio', {
    url: '/page40',
    templateUrl: 'templates/holmio.html',
    controller: 'holmioCtrl'
  })

  .state('erbio', {
    url: '/page41',
    templateUrl: 'templates/erbio.html',
    controller: 'erbioCtrl'
  })

  .state('tulio', {
    url: '/page42',
    templateUrl: 'templates/tulio.html',
    controller: 'tulioCtrl'
  })

  .state('iterbio', {
    url: '/page43',
    templateUrl: 'templates/iterbio.html',
    controller: 'iterbioCtrl'
  })

  .state('lutecio', {
    url: '/page44',
    templateUrl: 'templates/lutecio.html',
    controller: 'lutecioCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});