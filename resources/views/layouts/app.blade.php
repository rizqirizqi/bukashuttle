<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#009688" />
    <title>BukaShuttle - @yield('title')</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  </head>
  <body>
    <header>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">BukaShuttle</a>
          <a href="#" class="button-collapse left" data-activates="slide-out">
            <i class="material-icons"/> menu </i>
          </a>
        </div>
      </nav>
      <ul id="slide-out" class="side-nav">
        <li>
          <div class="userView">
            <div class="background"></div>
            <a href="#!user">
              <img src="http://placehold.it/100x100?text=John" class="circle">
            </a> 
            <a href="#!name">
              <span class="white-text name">John Doe</span>
            </a>
            <a href="#!email">
              <span class="white-text email">john.doe@bukalapak.com</span>
            </a>
          </div>
        </li>
        <li><a href="/" class="waves-effect">Pesan Shuttle</a></li>
        <li><a class="waves-effect">Riwayat Shuttle</a></li>
        <li><div class="divider"></div></li>
        <li><a href="/about" class="waves-effect">Tentang BukaShuttle</a></li>
      </ul>
    </header>
    <main id="app">
      @yield('body')
    </main>
    <script src="{{ mix('js/init.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>