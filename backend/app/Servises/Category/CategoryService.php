<?php

namespace App\Servises\Category;

use App\Models\Category;

class CategoryService
{

    public function getItems()
    {
        return Category::all();
    }
}
