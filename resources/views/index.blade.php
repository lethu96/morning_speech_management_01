<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csr-token" content="{{ csrf_token() }}">
        <link href="{{ asset('css/fontgoogleapi.css') }}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <title>Morning Speech Management</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('js/index.js') }}"></script>
    </body>
</html>
