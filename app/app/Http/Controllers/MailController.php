<?php

namespace App\Http\Controllers;

use App\Http\Requests\mailDespesaRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\CriarDespesasMail;

class MailController extends Controller
{
    public function index() {
        $mailData = [
            "title" => "Despesa criada",
            "body"  => "Sua despesa foi criada com sucesso!"
        ];
        Mail::to("leopoldobms@gmail.com")->send(new CriarDespesasMail($mailData));

        response('email enviado com sucesso!', 200);
    }

    public function despesa(mailDespesaRequest $request) {
        $mailData = [
            "title" => "Despesa cadastrada",
            "body"  => 'Despesa "' . $request->description . '" foi criada com sucesso.'
        ];
        Mail::to($request->email)->send(new CriarDespesasMail($mailData));

        return response()->json(['message' => 'Email enviado com sucesso'], 200);
    }
}
