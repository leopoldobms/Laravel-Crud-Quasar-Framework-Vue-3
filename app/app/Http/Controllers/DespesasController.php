<?php

namespace App\Http\Controllers;

use App\Http\Requests\despesasRequest;
use App\Http\Resources\despesasResource;
use App\Models\Despesas;
use Illuminate\Support\Facades\Auth;

class DespesasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorize('expense');

        return new despesasResource(
            Despesas::all()->where('user_id', Auth::user()->id)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(despesasRequest $request)
    {
        $this->authorize('expense');

        $request = $request->validated();
        $despesas = Despesas::create($request);
        return response(new despesasResource($despesas),200);
    }

    /**
     * Display the specified resource.
     * @param int id
     * @return \illuminate\Http\Response
     */

    public function show(string $id)
    {
        $this->authorize('expense');

        return new despesasResource(
            Despesas::where('id', $id)
            ->where('user_id', Auth::user()->id)
            ->first()
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(despesasRequest $request, $id)
    {
        $this->authorize('expense');

        $request = $request->validated();
        $despesas = Despesas::findOrFail($id);
        $despesas->update($request);

        return response(new despesasResource($despesas));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->authorize('expense');

        return response()->json(["data" => [
            "success" => Despesas::findOrFail($id)->delete()
        ]]);
        
    }
}
