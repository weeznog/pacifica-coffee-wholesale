angular.module('NavCtrl',[])

.directive('navigation',function(){
	return {  
		scope: true,
		replace: true,
		controller: function($scope){
			$scope.active = false; 
		},
		controllerAs: 'ctrl',
		link: function(scope, elem, attrs){
			// var active;
			var navBtn = elem.find('.nav-open');
			var home = navBtn.parent().find('.title');
			var sideNav = elem.find('#sideNav');
			var link = sideNav.find('.link');
			var mask = $('.mask-overlay');
			
			// Mobile Menu
			navBtn.on('click',function(){
				if(!scope.active){
					showAll('showSideNavM');
				}else{
					removeAll();
				}
				// on home btn click remove everything
				home.on('click',function(){
					removeAll();
				})

				// set active to false on link click;
				link.on('click', function(){
					mask.removeClass('show');
					scope.active = false;
				})
				mask.on('click',function(){
					removeAll();
				})
			})

				// NOT Touch Device Check 
				if($(window).width() >= 768 && window.navigator.maxTouchPoints <= 0){
					navBtn.on('mouseenter',function(){
						var sideNav = elem.find('#sideNav');
						showAll('showSideNavD')
						console.log('showD')

						sideNav.on('mouseenter',function(){
							showAll('showSideNavM')
						});

						sideNav.on('mouseleave',function(){
							removeAll();
						});
					});
					navBtn.on('mouseleave',function(){
						removeAll();
					});

				}

				function showAll(sizeClass){


					var sideNav = elem.find('#sideNav');
					var iconText = $('#sideNav .iconText');

					if(sizeClass === 'showSideNavD'){
						mask.addClass('show');
						sideNav.addClass(sizeClass);
					}else{
						mask.addClass('show');
						sideNav.addClass(sizeClass);
						iconText.addClass('showIconText');
						scope.active = true;
					}
				};

				function removeAll(){
					var sideNav = elem.find('#sideNav');
					var iconText = $('#sideNav .iconText');

					mask.removeClass('show');
					sideNav.removeClass('showSideNavM showSideNavD');
					iconText.removeClass('showIconText');
					scope.active = false;
				};
		},
		templateUrl: 'views/nav/nav.html'
	} 
})

.directive('sideNav',function(){
	return {
		// scope: true,
		replace: true,
		require: '^navigation',
		controller: function(){},
		link: function(scope, elem, attrs, navigation){
			var link = elem.find('.nav-link');
			var sideNav = $('#sideNav');
			var iconText = $('#sideNav .iconText');

			// Hide side nav when link is pressed...
			link.on('click',function(){
				closeAll();
			});

			var closeAll = function(){
				var coffeeLink = $(this).hasClass('contact');
				scope.active = false; // reset the active state in navctrl
				$('.mask-overlay').removeClass('show'); // hide the mask
				sideNav.removeClass('showSideNavM showSideNavD');
				iconText.removeClass('showIconText');
			};
		},
		templateUrl: 'views/nav/sideNav.html'
	} 
})

