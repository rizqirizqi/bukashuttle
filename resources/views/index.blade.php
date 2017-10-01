
@extends('layouts.app')

@section('title', 'Home')

@section('body')
  <div class="container u-mrgn-top--6">
    <div class="row">
      <div class="col s12 center">
        <h5 class="js-instruction" v-cloak=true>@{{instruction}}</h5>
      </div>
    </div>
    <div class="row center">
      <div class="col s6 u-mrgn-top--4">
        <a href="#" class="c-location-button" data-location-id=0 @click="selectLocation($event.currentTarget)">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">Jason</span>
        </a>
      </div>
      <div class="col s6 u-mrgn-top--4">
        <a href="#" class="c-location-button" data-location-id=1 @click="selectLocation($event.currentTarget)">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">PCV</span>
        </a>
      </div>
      <div class="col s6 u-mrgn-top--4 u-float-none u-display-inline-block">
        <a href="#" class="c-location-button" data-location-id=2 @click="selectLocation($event.currentTarget)">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">Ampera</span>
        </a>
      </div>
    </div>
  </div>
  <div id="departureTimeModal" class="modal bottom-sheet">
    <div class="modal-content">
      <div class="u-align-right">
        <a class="modal-close u-fg--black"><i class="material-icons">close</i></a>
      </div>
      <h5>Pilih jam keberangkatan:</h5>
      <div class="row">
        <div class="col s6 u-mrgn-top--2" v-for="departure in departureSchedules">
          <a class="waves-effect waves-light btn" :class="{'u-bg--red-super-dark': departure.isFull}" @click="selectDepartureTime(departure.id)">@{{departure.time}}</a>
        </div>
      </div>
    </div>
  </div>
@endsection