
@extends('layouts.app')

@section('title', 'Home')

@section('body')
  <div class="container u-mrgn-top--6">
    <div class="row">
      <div class="col s12 center">
        <h5 class="js-instruction" v-cloak=true>@{{instruction}}</h5>
      </div>
      <div class="col s12 center u-mrgn-top--4">
        <a href="#" class="c-location-button" data-location-id=0 @click.prevent="selectLocation($event.currentTarget)">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">Ampera</span>
        </a>
      </div>
      <div class="col s12 center u-mrgn-top--6">
        <a href="#" class="c-location-button" data-location-id=1 @click.prevent="selectLocation($event.currentTarget)">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">PCV</span>
        </a>
        <a href="#" class="c-location-button" data-location-id=2 @click.prevent="selectLocation($event.currentTarget)">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">Jason</span>
        </a>
      </div>
    </div>
  </div>
@endsection