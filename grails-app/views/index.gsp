<!doctype html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <!-- build:css styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="assets/bower_components/bootstrap/dist/css/bootstrap.css" />
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:css(.tmp) styles/main.css -->
    <link rel="stylesheet" href="assets/styles/main.css">
    <!-- endbuild -->
</head>
<body ng-app="pmApp">
<!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

<!-- Add your site or application content here -->
<div class="container">
    <div ng-include="'assets/views/header.html'"></div>



    %{--<div ng-include="'assets/views/login.html'"></div>--}%
    <ng-view></ng-view>
    %{--<div ng-include="'assets/views/project_list.html'" ng-controller="ProjectList"></div>--}%

    <div ng-include="'assets/views/footer.html'"></div>

</div>


<!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXX-X');
    ga('send', 'pageview');
</script>

<!--[if lt IE 9]>
    <script src="assets/bower_components/es5-shim/es5-shim.js"></script>
    <script src="assets/bower_components/json3/lib/json3.min.js"></script>
    <![endif]-->

<!-- build:js scripts/vendor.js -->
<!-- bower:js -->
<script src="assets/bower_components/jquery/dist/jquery.js"></script>
<script src="assets/bower_components/angular/angular.js"></script>
<script src="assets/bower_components/bootstrap/dist/js/bootstrap.js"></script>
<script src="assets/bower_components/angular-resource/angular-resource.js"></script>
<script src="assets/bower_components/angular-route/angular-route.js"></script>
<script src="assets/bower_components/angular-route/angular-route.js"></script>
<script src="assets/bower_components/angular-http-auth/src/http-auth-interceptor.js"></script>
<!-- endbower -->
<!-- endbuild -->

<!-- build:js({.tmp,app}) scripts/scripts.js -->
<script src="assets/scripts/app.js"></script>
<script src="assets/scripts/controllers/main.js"></script>
<script src="assets/scripts/project/project.js"></script>
<script src="assets/scripts/project/project-service.js"></script>
<script src="assets/scripts/task/task.js"></script>
<script src="assets/scripts/task/task-service.js"></script>
<script src="assets/scripts/comment/comment.js"></script>
<script src="assets/scripts/comment/comment-service.js"></script>
<script src="assets/scripts/person/person-service.js"></script>
<script src="assets/scripts/security/auth.js"></script>

<!-- endbuild -->
</body>
</html>
