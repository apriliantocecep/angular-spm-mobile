    var app = angular.module('SistemPakar', [
      "ngRoute",
      "ngTouch",
      "mobile-angular-ui",
    ]);

    app.config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/',          {templateUrl: "home.html"});
      $routeProvider.when('/proses',          {templateUrl: "proses.html"});
      $routeProvider.when('/hasil',          {templateUrl: "hasil.html"});
    });

    app.controller('MainController', function($rootScope, $scope, $location, $timeout){

    var vm = this;
    $scope.reg = {};
    $scope.reset = function() {
	    $scope.reg['nama'] = '';
	    $scope.reg['umur'] = '';
	    $scope.reg['goldar'] = '';
	    $scope.reg['gender'] = '';
	};

	$scope.home = function() {
		$scope.reset();
        vm.currentStep = 1;

		vm.ask.g01 = '';
        vm.ask.g02 = '';
        vm.ask.g03 = '';
        vm.ask.g04 = '';
        vm.ask.g05 = '';
        vm.ask.g06 = '';
        vm.ask.g07 = '';
        vm.ask.g08 = '';
        vm.ask.g09 = '';
        vm.ask.g10 = '';
        vm.ask.g11 = '';
        vm.ask.g12 = '';
        vm.ask.g13 = '';
        vm.ask.g14 = '';
        vm.ask.g15 = '';
        vm.ask.g16 = '';
        vm.ask.g17 = '';
	    
	    $location.path('/');
	};

    $scope.proses = function() {
    	if(typeof $scope.reg['nama'] === 'undefined' || $scope.reg['nama'] == '' ||
    		typeof $scope.reg['umur'] === 'undefined' || $scope.reg['umur'] == '' ||
    		typeof $scope.reg['goldar'] === 'undefined' || $scope.reg['goldar'] == '' ||
    		typeof $scope.reg['gender'] === 'undefined' || $scope.reg['gender'] == '')
    	{
    		/*navigator.notification.alert("Data harus di isi semua.", false, 'Peringatan!');*/
    		alert("Data harus di isi semua.");
    		// Toast.makeText(getApplicationContext(), "Hello", Toast.LENGTH_SHORT).show();
    	} else {

	    	$scope.messages = {
				nama       : $scope.reg['nama'],
				umur       : $scope.reg['umur'],
				goldar     : $scope.reg['goldar'],
				gender     : $scope.reg['gender']
			};
		    $location.path('/proses');
    	}
	};


    // Counter
    /*$scope.counter = 0;
    $scope.status = 'Bilangan Genap';
    $scope.onTimeout = function() {
    	$scope.counter++;

    	$scope.counter = $scope.counter == 10 ? 0:  $scope.counter;

    	$scope.status = $scope.counter % 2 == 0 ? 'Bilangan Genap': 'Bilangan Ganjil';

    	myTimeout = $timeout($scope.onTimeout, 1000);
    };

    var myTimeout = $timeout($scope.onTimeout, 1000);

    $scope.stop = function() {
    	$timeout.cancel(myTimeout);
    };*/

    // PROSES
        
        //Model
        vm.currentStep = 1;
        vm.steps = [
          {
            step: 1,
            template: "step1.html"
          },
          {
            step: 2,
            template: "step2.html"
          },   
          {
            step: 3,
            template: "step3.html"
          },
          {
            step: 4,
            template: "step4.html"
          },
          {
            step: 5,
            template: "step5.html"
          },
          {
            step: 6,
            template: "step6.html"
          },
          {
            step: 7,
            template: "step7.html"
          },
          {
            step: 8,
            template: "step8.html"
          },
          {
            step: 9,
            template: "step9.html"
          },
          {
            step: 10,
            template: "step10.html"
          },
          {
            step: 11,
            template: "step11.html"
          },
          {
            step: 12,
            template: "step12.html"
          },
          {
            step: 13,
            template: "step13.html"
          },
          {
            step: 14,
            template: "step14.html"
          },
          {
            step: 15,
            template: "step15.html"
          },
          {
            step: 16,
            template: "step16.html"
          },
          {
            step: 17,
            template: "step17.html"
          },
        ];
        vm.user = {};
        
        //Functions
        vm.gotoStep = function(newStep) {
        	/*if(typeof vm.user.name === 'undefined' || vm.user.name == '') {
        		alert('nama kosong');
        	}

        	if (typeof vm.user.email === 'undefined' || vm.user.email == '') {
    			alert('Email kosong');	
    		} 

    		if (typeof vm.user.age === 'undefined' || vm.user.age == '') {
        		alert('Age kosong');
        	}*/

          		vm.currentStep = newStep;
        };
        
        vm.getStepTemplate = function(){
          for (var i = 0; i < vm.steps.length; i++) {
                if (vm.currentStep == vm.steps[i].step) {
                    return vm.steps[i].template;
                }
            }
        };
        
        vm.save = function() {
          var g01 = vm.ask.g01,
          	g02 = vm.ask.g02,	
          	g03 = vm.ask.g03,	
          	g04 = vm.ask.g04,	
          	g05 = vm.ask.g05,	
          	g06 = vm.ask.g06,	
          	g07 = vm.ask.g07,	
          	g08 = vm.ask.g08,	
          	g09 = vm.ask.g09,	
          	g10 = vm.ask.g10,	
          	g11 = vm.ask.g11,	
          	g12 = vm.ask.g12,	
          	g13 = vm.ask.g13,	
          	g14 = vm.ask.g14,	
          	g15 = vm.ask.g15,	
          	g16 = vm.ask.g16,	
          	g17 = vm.ask.g17;

		    // $scope.ans = {};

          	if (g01 == 'Y' && g02 == 'Y' && g03 == 'Y' && g04 == 'Y' && g05 == 'Y') {
          		$scope.penyakit = 'Rabun Jauh';
          		$scope.definisi = 'Rabun Jauh (Miopia) adalah merupakan suatu kondisi mata dimana penderitanya bisa mellihat benda benda dekat dengan jelas tetapi untuk melihat objek yang jauh akan terlihat buram/kabur.';
          		$scope.solusi	= 'Langkah penanganan rabun jauh yang paling sederhana dan terjangkau adalah dengan menggunakan kacamata atau lensa kontak , Proses operasi dengan sinar laser juga dapat menjadi alternatif. Diperkirakan sekitar 90 persen pasien yang menjalaninya merasakan perubahan yang signifikan.';
          	} else if (g06 == 'Y' && g07 == 'Y' && g08 == 'Y' && g09 == 'Y') {
          		$scope.penyakit = 'Rabun Dekat';
          		$scope.definisi = 'Rabun dekat adalah gangguan pada mata yang menyebabkan penderita tidak bisa melihat objek dekat dengan jelas atau terlihat buram, namun biasanya benda yang jauh justru terlihat jelas. Rabun dekat, disebut juga dengan hyperopia, sering dikaitkan sebagai masalah pembiasan. Mata akan menjadi mudah lelah jika mengalami rabun dekat.';
          		$scope.solusi	= 'Untuk mengatasi rabun dekat maka kaca mata yang digunakan adalah kacamata lensa cembung atau kacamata yang memiliki lensa yang ujungnya lebih tebal dibandingkan bagian tengah, sehingga bisa membuat fokus cahaya akan lebih akurat jatuh di atas retina.';
          	} else if (g10 == 'Y' && g11 == 'Y' && g12 == 'Y' && g13 == 'Y') {
          		$scope.penyakit = 'Katarak';
          		$scope.definisi = 'Katarak adalah bagian keruh pada lensa mata yang biasanya bening dan akan mengaburkan penglihatan. Katarak tidak menyebabkan rasa sakit dan termasuk penyakit yang sangat umum terjadi.';
          		$scope.solusi	= 'Kacamata dan lampu yang lebih terang mungkin bisa membantu katarak yang ringan. Meski demikian, katarak akan berkembang seiring waktu dan akhirnya penderita akan membutuhkan operasi.';
          	} else if (g14 == 'Y' && g15 == 'Y' && g16 == 'Y' && g17 == 'Y') {
          		$scope.penyakit = 'Silinder';
          		$scope.definisi = 'Silinder (Astigmatis). Mata silinder memiliki istilah medis astigmatism. Istilah tersebut mengacu pada kondisi mata yang mengalami penglihatan kabur dan berbayang karena bentuk kornea atau lensa mata tidak cembung sempurna.';
          		$scope.solusi	= 'Memakai kacamata dengan menggunakan lensa yang didesain khusus, kacamata adalah cara paling mudah untuk mengoreksi penglihatan kabur atau berbayang akibat mata silinder dan selalu mengkonsumsi buah-buahan yang banyak mengandung vitamin C.';
          	} else {
          		$scope.penyakit = 'Tidak ditemukan';
          		$scope.definisi = '-';
          		$scope.solusi	= '-';
          	}

		    $location.path('/hasil');

        };
    // END PROSES


    // Needed for the loading screen
	  $rootScope.$on('$routeChangeStart', function() {
	    $rootScope.loading = true;
	  });

	  $rootScope.$on('$routeChangeSuccess', function() {
	    $rootScope.loading = false;
	  });
    
    });

	app.controller('askController', function($scope, $location){
		
	});

    // app.controller("askController", [wizardController]);