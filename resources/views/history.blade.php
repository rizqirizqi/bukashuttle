
@extends('layouts.app')

@section('title', 'History')

@section('body')
  <div class="container">
    <div class="row">
      <div class="col s12" style="padding: 3px">
        <div class="card z-depth-2" style="border-radius: 5px;">
          <div class="card-content" style="padding-top: 6px; padding-bottom: 6px; height: 78px">
            <div class="valign-wrapper" style="margin-right: 10px; font-size: 18px; color: #00c300;">
              <i class="material-icons">drive_eta</i><span style="margin-left: 8px;">In progress</span>
            </div>
            <hr/>
            <p style="float: left; color: #a9a9a9;">PCV - Jason's</p>
            <p style="float: right; color: #a9a9a9;">1 Oct, 09.30</p>
          </div>
        </div>
        <div class="card z-depth-2" style="border-radius: 5px;">
          <div class="card-content" style="padding-top: 6px; padding-bottom: 6px; height: 78px">
            <div class="valign-wrapper" style="margin-right: 10px; font-size: 18px;">
              <i class="material-icons">drive_eta</i><span style="margin-left: 8px;">Completed</span>
            </div>
            <hr/>
            <p style="float: left; color: #a9a9a9;">PCV - Jason's</p>
            <p style="float: right; color: #a9a9a9;">30 Sep, 09.00</p>
          </div>
        </div><div class="card z-depth-2" style="border-radius: 5px;">
          <div class="card-content" style="padding-top: 6px; padding-bottom: 6px; height: 78px">
            <div class="valign-wrapper" style="margin-right: 10px; font-size: 18px; ">
              <i class="material-icons">drive_eta</i><span style="margin-left: 8px;">Completed</span>
            </div>
            <hr/>
            <p style="float: left; color: #a9a9a9;">PCV - Jason's</p>
            <p style="float: right; color: #a9a9a9;">29 Sep, 17.00</p>
          </div>
        </div>
    	</div>
    </div>
  </div>
@endsection