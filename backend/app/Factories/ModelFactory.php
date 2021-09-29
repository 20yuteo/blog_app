<?php

namespace App\Factories;

use Illuminate\Http\Request;

abstract class ModelFactory {

    public function create(Request $request){

        return $this->createModel($request);

    }

    public abstract function createModel(Request $request);

}