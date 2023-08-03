<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Despesas extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'user_id',
        'value',
        'data',
        'description'
    ];
}
