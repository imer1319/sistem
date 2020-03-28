@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
            <div class="card" style="box-shadow: 2px 2px 10px #666;">
                <div class="text-center mt-3">{{ __('Registrarse') }}</div>
                <div class="img text-center">
                    <img src="imagenes/logo.png" style="width: 120px; border-radius: 20%; filter: drop-shadow(5px 5px 10px #444);">
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <div class="col-md-10 m-auto">
                                <input id="name" type="text" class="form-control text-center @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Nombre">

                                @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-10 m-auto">
                                <input id="apellido_paterno" type="text" class="form-control text-center @error('apellido_paterno') is-invalid @enderror" name="apellido_paterno" value="{{ old('apellido_paterno') }}" autocomplete="apellido_paterno" placeholder="Apellido paterno">

                                @error('apellido_paterno')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-10 m-auto">
                                <input id="apellido_materno" type="text" class="form-control text-center @error('apellido_materno') is-invalid @enderror" name="apellido_materno" value="{{ old('apellido_materno') }}" autocomplete="name" placeholder="Apellido materno">

                                @error('apellido_materno')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-10 m-auto">
                                <input id="email" type="email" class="form-control text-center @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Correo Electrónico">

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-10 m-auto">
                                <input id="password" type="password" class="form-control text-center @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Contraseña">

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-10 m-auto">
                                <input id="password-confirm" type="password" class="form-control text-center" name="password_confirmation" required autocomplete="new-password" placeholder="Confirmar Contraseña">
                            </div>
                        </div>
                        
                        <div class="row mb-3">
                            <div class="col-md-10 m-auto">
                                <select id="curso" type="text" class="form-control text-center @error('curso') is-invalid @enderror" name="curso" value="{{ old('curso') }}" required autocomplete="name">
                                    <option>1° A</option>
                                    <option>1° B</option>
                                    <option>1° C</option>
                                    <option>1° D</option>
                                    <option>2° A</option>
                                    <option>2° B</option>
                                    <option>2° C</option>
                                    <option>2° D</option>
                                    <option>3° A</option>
                                    <option>3° B</option>
                                    <option>3° C</option>
                                    <option>3° D</option>
                                    <option>4° A</option>
                                    <option>4° B</option>
                                    <option>4° C</option>
                                    <option>4° D</option>
                                    <option>5° A</option>
                                    <option>5° B</option>
                                    <option>5° C</option>
                                    <option>5° D</option>
                                    <option>6° A</option>
                                    <option>6° B</option>
                                    <option>6° C</option>
                                    <option>6° D</option>
                                </select>
                                @error('curso')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-12 offset-md-12">
                                <button type="submit" class="btn btn-primary btn-block">
                                    {{ __('Registrarse') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
