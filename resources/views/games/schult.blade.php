<!DOCTYPE html>
<html>
<head>
    <title>Schulte table</title>
    <link href="{{ asset('css/stilos.css') }}" rel="stylesheet">
</head>
<body>
    <button class="mostrar" onclick="mostrar()">Empezar</button>
    <div id="contenedor">
        <div id="aactual"></div>
        <table id="table">
            <tr>
                <td onclick=pres(this) v-model="letra.a"></td>
                <td onclick=pres(this) id="b"></td>
                <td onclick=pres(this) id="c"></td>
            </tr>
            <tr>
                <td onclick=pres(this) id="d"></td>
                <td onclick=pres(this) id="e"></td>
                <td onclick=pres(this) id="f"></td>
            </tr>
            <tr>
                <td onclick=pres(this) id="g"></td>
                <td onclick=pres(this) id="h"></td>
                <td onclick=pres(this) id="i"></td>
            </tr>
        </table>
    </div>
    <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>