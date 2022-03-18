<?php

namespace App\Servises\Lead;

use App\Models\Lead;

class LeadService
{

//    public function getItems()
//    {
//        return Lead::all();
//    }
    public function store(\Illuminate\Http\Request $request, Lead $lead)
    {
        $lead->fill($request->only($lead->getFillable()));
        $lead->save();
        return $lead;
    }

    public function getItems()
    {
        return Lead::with('category', 'status')->get();
    }
}
