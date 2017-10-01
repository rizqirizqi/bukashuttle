
@extends('layouts.app')

@section('title', 'Home')

@section('body')
  <div class="container u-mrgn-top--6">
  	<h4 class="u-fg--red-brand">Booking</b></h2>
    <div class="row">
      <div class="col s12">
        <div class="row" style="margin-bottom: 0!important">
      	  	<div class="col s6">
          		<p style="font-size: 18px"><b>Rute</b></p>
          	</div>
          	<div class="col s6">
          		<p style="font-size: 18px">{{ $shuttleRoute }}</p>
          	</div>
        </div>
        <div class="row">
      	  	<div class="col s6">
          		<p style="font-size: 18px"><b>Berangkat jam</b></p>
          	</div>
          	<div class="col s6">
          		<p style="font-size: 18px">{{ $departureTime }}</p>
          	</div>
        </div>
        @if (!$showCancel)
          <div class="row">
            <div class="col s12 center">
              <a href="/" class="waves-effect btn u-bg--red-brand">Batalkan</a>
            </div>
          </div>
        @endif
        <hr/>
      </div>
    </div>
    <h4 style="color:#d71149"><b>Passengers</b></h2>
    <div class="row">
    	<div class="col s12">
    		<ul class="collection" style="border-top: 0!important; border-right: 0!important; border-left: 0!important; box-shadow: none!important;">
		      <li class="collection-item">Fadhilur Rizki ( @fadhilurrizki )</li>
		      <li class="collection-item">Alvin Yaputra ( @alvinyap )</li>
		      <li class="collection-item">Mgs. M. Rizqi Fadhlurrahman ( @mgsrizqi )</li>
		      <li class="collection-item">Ryan Baskara Putra ( @ryanbaskara )</li>
		      <li class="collection-item">Anita Carolina Aritonang (@anitaritonang )</li>
		    </ul>
    	</div>
    </div>
  </div>
@endsection