"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const permisos_controller_1 = require("../controllers/permisos.controller");
const router = express_1.default.Router();
// Ruta para obtener todos los permisos con información de la persona
router.get('/', permisos_controller_1.obtenerPermisosConPersona);
// Ruta correcta para crear un permiso
router.post('/', permisos_controller_1.crearPermiso);
exports.default = router;
