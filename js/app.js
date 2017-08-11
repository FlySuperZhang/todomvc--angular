(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app=angular.module('myApp',[]);
	app.controller('myController',['$scope','$location',function($scope,$location){
		// 任务展示
		$scope.todos=[
			{id:1,name:'吃饭',completed:true},
			{id:2,name:'睡觉',completed:false},
			{id:3,name:'lol',completed:true},
			{id:4,name:'么么哒',completed:false},
			{id:5,name:'嘿嘿嘿',completed:true},
		]
		// 任务添加
		$scope.newTodo='';
		$scope.add=function(){
			if(!$scope.newTodo){
				return
			}
			$scope.todos.push({
				id:Math.random(),
				name:$scope.newTodo,
				completed:false
			})
			//置空
			$scope.newTodo=''
		}
		// 删除任务
		$scope.remove=function(id){
			for(var i=0;i<$scope.todos.length;i++){
				var item=$scope.todos[i]
				if(item.id===id){
					$scope.todos.splice(i,1)
					return
				}
			}
		}
		// 修改任务
		$scope.isEditingId=-1
		$scope.edit=function(id){
			$scope.isEditingId=id
		}
		$scope.save=function(){
			$scope.isEditingId=-1
		}
		// 切换任务状态
		$scope.selectAll=false
		$scope.toggleAll=function(){
			for(var i=0;i<$scope.todos.length;i++){
				var item=$scope.todos[i]
				item.completed=$scope.selectAll
			}
		}
		//显示未完成任务数量
		$scope.getLeftItem=function(){
			//方法一
			//return $scope.todos.filter(function(item){return item.completed===false}).length
			//方法二
			var  count=0
			for (var i=0;i<$scope.todos.length;i++){
				var item=$scope.todos[i]
				if(!item.completed){
					count++
				}
			}
			return count
		}
		//清除已完成任务数
		$scope.clearCompleted=function(){
			//方法一
			//$scope.todos= $scope.todos.filter(function(item){return item.completed===false})
			//方法二
			for(var i=$scope.todos.length-1;i>=0;i--){
				var item=$scope.todos[i]
				if(item.completed){
					$scope.todos.splice(i,1)
				}
			}
		}
		//切换不同状态任务的显示
		 $scope.isCompleted={}
		// //显示未完成
		// $scope.active=function(){
		// 	$scope.isCompleted={completed:false}
		// }
		// //显示已完成
		// $scope.completed=function(){
		// 	$scope.isCompleted={completed:true}
		// }
		// //显示所有任务
		// $scope.all=function(){
		// 	$scope.isCompleted={}
		// }

		
		$scope.location = $location
		$scope.$watch('location.url()',function(now, old){
		switch(now){
			case '/active':
			$scope.isCompleted = {completed:false}
			break;
			case '/completed':
			$scope.isCompleted = {completed:true}
			break;
			default:
			$scope.isCompleted = {}
		}
		})


	}])
})(window)
