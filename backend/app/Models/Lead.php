<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = ['link', 'is_express_delivery', 'comment', 'category_id', 'status_id'];

    public function status() // one - mony
    {
        return $this->belongsTo(Status::class);
    }

    public function category() // one - mony
    {
        return $this->belongsTo(Category::class);
    }
}
