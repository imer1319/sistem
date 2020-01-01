<template>
    <div class="col-12">
        <!-- crear registro -->
        <form v-on:submit.prevent="agregarCategoria" enctype="multipart/form-data">
            <div class="modal fade" id="crearCategory">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>Crear</h4>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body pb-0">
                            <div class="form-group row">
                                <label class="col-form-label col-md-2">Nombre</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" v-model="categoria.nombre" placeholder="Nombre de la categoria" required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-form-label col-md-2">Puntos</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" v-model="categoria.puntos" placeholder="puntos de la categoria" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group">
                                    <label for="imagen"></label>
                                    <input type="file" @change="obtenerImagencrear" class="form-control-file" ref="img" accept="image/*" equired />
                                </div>
                                <figure>
                                    <img width="200" height="200" :src="imagen" />
                                </figure>
                            </div>
                        </div>
                        <div class="modal-footer pb-0">
                            <div class="form-group row">
                                <div class="col-lg-6">
                                    <input type="submit" name="enviar" value="Crear Registro" class="btn btn-primary pull-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <!-- editar registro -->
        <form
        v-on:submit.prevent="updateCategoria(fillCategoria)"
        enctype="multipart/form-data"
        >
        <div class="modal fade" id="editCategoria">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4>Editar</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pb-0">
                        <div class="form-group row">
                            <label class="col-form-label col-md-2">Nombre</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" v-model="fillCategoria.nombre" placeholder="Nombre de la categoria" required/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-form-label col-md-2">Puntos</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" v-model="fillCategoria.puntos" placeholder="puntos de la categoria" required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-group">
                                <label></label>
                                <input type="file" class="form-control-file" @change="obtenerImagen" v-if="estado == false" accept="image/*" required/>
                                <input type="file" class="form-control-file" @change="obtenerImagenNueva" v-else accept="image/*"
                                required
                                />
                            </div>
                            <figure>
                                <img width="200" height="200" :src="imagen" v-if="estado == false"/>
                                <img width="200" height="200" :src="`imagenes/categorias/${fillCategoria.icono}`" v-else/>
                            </figure>
                        </div>
                        <div class="modal-footer pb-0">
                            <div class="form-group row">
                                <div class="col-lg-6">
                                    <input type="submit" name="enviar" value="Crear Registro" class="btn btn-primary pull-right"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <!-- listar los categorias -->
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Categorias</h3>
            <a href="#" class="btn btn-success float-right" v-on:click="crearCategoria()"><i class="fas fa-plus"></i> Crear Nuevo</a>
        </div>
        <spinner v-if="loading"></spinner>
        <div class="card-body" v-else>
            <paginate name="categorias" :list="categorias" :per="4">
                <table class="table table-bordered table-striped py-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Puntos</th>
                            <th>Imagen</th>
                            <th class="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(categoria, index) in paginated('categorias')" :key="index">
                            <td width="10px">{{ index + 1 }}</td>
                            <td>{{ categoria.nombre }}</td>
                            <td>{{ categoria.puntos }}</td>
                            <td>
                                <img :src="`/imagenes/categorias/${categoria.icono}`" 
                                class="img-responsive" height="40" width="40"/>
                            </td>
                            <td class="text-center" colspan="2">
                                <a href="#" class="btn btn-info" @click="editarCategoria(categoria)"><i class="fas fa-pencil-alt"></i>Ver</a>
                                <a href="#" class="btn btn-warning color-letra" @click="editarCategoria(categoria)"><i class="fas fa-pencil-alt"></i>Editar</a>
                                <a href="#" class="btn btn-danger color-letra" v-on:click="eliminarCategoria(categoria, index)">
                                    <i class="far fa-trash-alt"></i>Eliminar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </paginate>
                <paginate-links for="categorias" :classes="{ul: 'pagination',li: 'page-item',a: 'page-link'}"></paginate-links>
            </div>
        </div>
    </div>
</template>

<script>
    import EventBus from "../../event-bus";
    export default {
        created: function() {
            this.mostrarCategoria();
            EventBus.$on("agregado", data => {
                this.categorias.push(data);
            });
        },
        data() {
            return {
                csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
                categorias: [],
                categoria: { nombre: "", puntos: "", icono: "" },
                fillCategoria: { nombre: "", puntos: "", icono: "" },
                imagenMiniatura: "",
                loading: true,
                estado: false,
                paginate: ["categorias"]
            };
        },
        methods: {
            crearCategoria: function() {
                $("#crearCategory").modal("show");
            },
            mostrarCategoria: function() {
                axios.get("categoria").then(res => {
                    this.categorias = res.data;
                    this.loading = false;
                });
            },
            obtenerImagencrear(e) {
                let file = e.target.files[0];
                this.categoria.icono = file;
                this.cargarImagen(file);
            },
            obtenerImagen(e) {
                this.estado = true;
                let file = e.target.files[0];
                this.fillCategoria.icono = file;
                this.cargarImagen(file);
            },
            obtenerImagenNueva(e) {
                this.estado = false;
                let file = e.target.files[0];
                this.categoria.icono = file;
                this.cargarImagen(file);
            },
            cargarImagen(file) {
                let reader = new FileReader();
                reader.onload = e => {
                    this.imagenMiniatura = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            validarEspacios(parametro) {
                var patron = /^\s+$/;
                if (patron.test(parametro)) {
                    return false;
                } else {
                    return true;
                }
            },
            agregarCategoria() {
                if (
                    this.validarEspacios(this.categoria.nombre) == false ||
                    this.validarEspacios(this.categoria.puntos) == false ||
                    this.validarEspacios(this.categoria.icono) == false
                    ) {
                    alert("los campos no pueden estar vacios");
            } else {
                let formData = new FormData();
                formData.append("nombre", this.categoria.nombre);
                formData.append("puntos", this.categoria.puntos);
                formData.append("icono", this.categoria.icono);
                axios.post("/categoria", formData).then(res => {
                    EventBus.$emit("agregado", res.data.categoria);
                    this.categoria.nombre = "";
                    this.categoria.puntos = "";
                    this.$refs.img.value = "";
                    this.imagenMiniatura = "";
                    $("#crearCategory").modal("hide");
                });
            }
        },
        confirmarDelete() {
            var resp = confirm("Estas seguro que deseas eliminarlo?");
            if (resp == true) {
                return true;
            } else {
                return false;
            }
        },
        eliminarCategoria: function(categoria, index) {
            if (this.confirmarDelete() == true) {
                axios.delete(`/categoria/${categoria.id}`).then(() => {
                    this.categorias.splice(index, 1);
                });
            }
        },
        editarCategoria: function(categoria) {
            this.estado = true;
            this.fillCategoria.nombre = categoria.nombre;
            this.fillCategoria.puntos = categoria.puntos;
            this.fillCategoria.icono = categoria.icono;
            this.fillCategoria.id = categoria.id;
            $("#editCategoria").modal("show");
        },
        updateCategoria: function(fillCategoria) {
            if (
                this.validarEspacios(this.fillCategoria.nombre) == false ||
                this.validarEspacios(this.fillCategoria.puntos) == false ||
                this.validarEspacios(this.fillCategoria.icono) == false
                ) {
                alert("los campos no pueden estar vacios");
        } else {
            let data = new FormData();
            data.append("nombre", this.fillCategoria.nombre);
            data.append("puntos", this.fillCategoria.puntos);
            data.append("icono", this.fillCategoria.icono);
            data.append("_method", "PUT");
            var url = `/categoria/${fillCategoria.id}`;
            axios.post(url, data).then(res => {
                this.mostrarCategoria();
                $("#editCategoria").modal("hide");
            });
        }
    }
},
computed: {
    imagen() {
        this.estado = false;
        return this.imagenMiniatura;
    }
}
};
</script>

<style>
.color-letra,
.color-letra:hover {
    color: white;
}
</style>
