
@extends('layouts.app')

@section('title', 'Home')

@section('body')
  <div class="container u-mrgn-top--6">
    <div class="row">
      <div class="col s12 center">
        <h5 class="js-instruction" v-cloak=true>@{{originInstruction}}</h5>
      </div>
      <div class="col s12 center">
        <a href="#" class="c-location-button" @click.prevent="selectOrigin">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">Ampera</span>
        </a>
      </div>
      <div class="col s12 center u-mrgn-top--6" @click.prevent="selectOrigin">
        <a href="#" class="c-location-button">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">PCV</span>
        </a>
        <a href="#" class="c-location-button" @click.prevent="selectOrigin">
          <img src="{{ asset('images/building.jpg') }}" class="c-location-button--image"/>
          <span class="c-location-button--name">Jason</span>
        </a>
      </div>
    </div>
  </div>
@endsection