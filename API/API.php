<?php
date_default_timezone_set('America/Sao_Paulo');
require "Controller/MysqlController.php";

/*
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
*/
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$endpoint = explode("/", $_SERVER["REQUEST_URI"]);
$metodo = $_SERVER["REQUEST_METHOD"];
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$CONN = new MysqlController();

$endpoint = explode("?", $endpoint[2])[0];

switch ($metodo) {
    case 'GET':
        switch ($endpoint) {
            case 'calculosMetabolismoBasal':
                $usuTemp = $CONN->QuerySelect('SELECT * FROM `calculo_metabolismo_basal`;');
                echo json_encode($usuTemp);
                break;
        }
    case 'POST':
        switch ($endpoint) {
            case 'AdicionarDietaUsuario':
                $usuarioId = 1;
                $CONN->InsertWithParams("INSERT INTO `usuario_dieta_diaria` (`udd_id`, `udd_id_usuario`, `udd_nome`, `udd_data_cadastro`, `udd_total_proteinas`, `udd_total_lipideos`, `udd_total_carboidratos`, `udd_total_kcal`) VALUES (NULL, ?, ?, NOW(), NULL, NULL, NULL, '');", [
                    ["column" => "udd_nudd_id_usuarioome", "value" => $usuarioId, "type" => 'i'],
                    ["column" => "udd_nome", "value" => $data["udd_nome"], "type" => 's']
                ]);
                break;
      
            case 'token':

                if (json_last_error() === JSON_ERROR_NONE) {

                    if ($data["usuario"] != "" && md5($data["senha"]) != "") {

                        $usuario = QueryWithParams('SELECT * FROM `UsuarioPainel` WHERE `Usuario` = ? AND `Senha` = ?', [
                            ["column" => "Usuario", "value" => $data["usuario"], "type" => 's'],
                            ["column" => "Senha", "value" => md5($data["senha"]), "type" => 's'],
                        ]);


                        if (count($usuario) > 0) {
                            $token = gerarToken();
                            $db = GetConn();
                            $result = $db->query('UPDATE `UsuarioPainel` set Token = \'' . $token . '\', dataUltToken = \'' . date('Y-m-d H:i:s') . '\' WHERE Id = ' . $usuario[0]["Id"] . ';');
                            echo json_encode(["token" => $token, "acesso" => "ok"]);
                            die;
                        }

                    }
                } 
                echo json_encode(["token" => null, "acesso" => "error"]);
                break;
        }
        break;
}
die;
