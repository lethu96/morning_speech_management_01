<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csr-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/AdminLTE.css">
        <link rel="stylesheet" href="/css/_all-skins.min.css">
        <link rel="stylesheet" href="/css/ionicons.min.css">
        <link rel="stylesheet" href="/css/animate.css">
        <link rel="stylesheet" href="/css/line-awesome.css">
        <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css">
        <link rel="stylesheet" href="/css/line-awesome-font-awesome.min.css">
        <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css">
        <link rel="stylesheet" type="text/css" href="/css/slick.css">
        <link rel="stylesheet" type="text/css" href="/css/slick-theme.css">
        <link rel="stylesheet" href="/css/stylefr.css">
        <link rel="stylesheet" href="/css/responsive.css">
        <link rel="stylesheet" type="text/css" href="/css/main.css">
        <link rel="stylesheet" type="text/css" href="/css/pagination.css">
        <link rel="stylesheet" type="text/css" href="/css/DraftStyleDefault.css">
        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css">
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic" />
        <link rel="stylesheet" type="text/css" href="css/style.css">
            <title>Morning Speech Management</title>
        <style>
            .title{
                margin-top: 230px;
                color: cadetblue;
            } 
        </style>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/index.js') }}"></script>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.slimscroll.min.js"></script>
        <script src="/js/adminlte.min.js"></script>
        <script src="https://use.fontawesome.com/581d5d54d2.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script type="text/javascript">

            $.ajaxSetup({
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
            })
        </script>
    </body>
</html>
