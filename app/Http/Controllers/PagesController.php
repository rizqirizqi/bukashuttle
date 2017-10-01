<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function summary(Request $request)
    {
        $originId = $request->query('origin');
        $destinationId = $request->query('destination');
        $departureId = $request->query('departure');
        $offices = array("Jason", "PCV", "Ampera");
        $departureSchedules = array(
            array("id"=>0, "time"=>'08:00', "isFull"=>false),
            array("id"=>1, "time"=>'09:00', "isFull"=>false),
            array("id"=>2, "time"=>'10:00', "isFull"=>false),
            array("id"=>3, "time"=>'11:00', "isFull"=>true),
            array("id"=>4, "time"=>'12:00', "isFull"=>true),
            array("id"=>5, "time"=>'13:00', "isFull"=>false),
            array("id"=>6, "time"=>'14:00', "isFull"=>false),
            array("id"=>7, "time"=>'15:00', "isFull"=>true),
            array("id"=>8, "time"=>'16:00', "isFull"=>false),
            array("id"=>9, "time"=>'17:00', "isFull"=>true),
            array("id"=>10, "time"=>'18:00', "isFull"=>false),
            array("id"=>11, "time"=>'19:00', "isFull"=>false),
        );
        $shuttleRoute = $offices[$originId] . " - " . "$offices[$destinationId]";
        foreach($departureSchedules as $departure) {
            if($departure["id"] == $departureId) {
                $departureTime = $departure["time"];
                $showCancel = $departure["isFull"];
            }
        }
        return view('summary', ['shuttleRoute'=>$shuttleRoute, 'departureTime'=>$departureTime, 'showCancel'=>$showCancel]);
    }
}
