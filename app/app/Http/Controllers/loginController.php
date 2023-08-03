<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\loginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    public function index(Request $request){
        return view('site.login');
    }
    public function getUserId($id){
        return User::findOrFail($id);
    }


    public function auth(loginRequest $request){
        $credentials = $request->validated();

        
        if(Auth::attempt(['name'=>$credentials['email'], 'password'=> $credentials['password']])){
            $request->session()->regenerate();
            dd('entrou');
            return redirect()->intended('login');
        } else{
            dd('não entrou');
            return redirect()->back()->with('erro', 'Email ou senha inválida.');
        }

        return view('site.login');
    }
}
