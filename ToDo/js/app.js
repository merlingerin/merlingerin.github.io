// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ToDo', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('ToDoCtrl', function ($scope, $ionicModal, $timeout) {

  if(!angular.isUndefined(window.localStorage['tasks'])){
    $scope.tasks = JSON.parse(window.localStorage['tasks']);
  }
  else {
      $scope.tasks = [
        {title: 'Купить дезоторант', description: 'Срочно курить дезоторант', done: false},
        {title: 'Сделать сайт', description: 'Сверстать внутрение страницы kupizalog', done: false},
        {title: 'nodeJS', description: 'Выучить nodeJS', done: true},
        {title: 'AngularJs', description: 'Срочно выучить angularJS', done: false},
      ];
  }



  $ionicModal.fromTemplateUrl('views/task.html', function (modal) {  
    $scope.taskModal = modal;
  },{
    scope: $scope,
    // animation: 'slide-in-up'
  });

  $scope.currentTaskId = -1;

  $scope.addNewTask = function () {
    $scope.taskModal.show();
     $scope.activeTask = {
      title: '',
      description: '',
      done: false
    }
    $scope.currentTaskId = -1;
  }

  $scope.closeTask = function () {  
    $scope.taskModal.hide();
  }

  $scope.openTask = function (id) {  
    var task = $scope.tasks[id];
    $scope.currentTaskId = id;
    $scope.activeTask = {
      title: task.title,
      description: task.description,
      done: task.done
    }
    $scope.taskModal.show();
  }

  $scope.deleteTask = function (id) {  
    $scope.tasks.splice(id, 1);
    saveItems();
  }

  $scope.submitTask = function (task) {  
    if($scope.currentTaskId == -1) {
      $scope.tasks.push({
        title: task.title,
        description: task.description,
        done: task.done
      });
    }
    else {
      var id = $scope.currentTaskId;
      $scope.tasks[id].title = task.title;
      $scope.tasks[id].description = task.description;
      $scope.tasks[id].done = task.done;
    }
    saveItems();
    $scope.taskModal.hide();
  }
  
  $scope.saveTasks = function () { 
    $timeout(function (saveItems) {});
  }


  function saveItems() {  
    window.localStorage['tasks'] = angular.toJson($scope.tasks);
  }
  
})











.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
