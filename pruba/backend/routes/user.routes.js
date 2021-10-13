import { Router } from 'express';
var router = Router();

export let users = {
    "1":{
        nombre: "Alberto",
        apellido: "Matínez",
        email: "alberto.martinez@freematica.com"
    },
    "2":{
        nombre: "Eric",
        apellido: "Garcia",
        email: "eric.garcia@freematica.com"
    }, 
    "3":{
        nombre: "Pol",
        apellido: "Soriano",
        email: "pol.soriano@freematica.com"
    },
    "4":{
        nombre: "Carlos",
        apellido: "Morales",
        email: "carlos.morales@freematica.com"
    }
}
/* GET home page. */

 export function getAllUsers() {
    return users;
}