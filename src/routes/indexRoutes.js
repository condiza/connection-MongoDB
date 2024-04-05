import { Router } from "express";

import { createProductos, deleteProductos, renderEditProducto, renderProductos, statusProductos, updateProducto } from "../controllers/productoController";

const router = Router();

router.get("/", renderProductos);

router.post("/productos/agregar", createProductos);

router.get("/productos/:id/editar", renderEditProducto);

router.post("/productos/:id/editar", updateProducto);

router.get("/productos/:id/eliminar", deleteProductos);

router.get("/productos/:id/estatus", statusProductos);



export default router;