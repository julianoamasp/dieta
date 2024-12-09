<?php
class MysqlController
{

    public function GetConn()
    {
        $mysqli = new mysqli("localhost:3306", "root", "", "appdieta");

        if ($mysqli->connect_error) {
            die("Erro na conexão: " . $mysqli->connect_error);
        }
        return $mysqli;
    }

    public function Query($query)
    {
        $res = false;
        try {
            $db = $this->GetConn();
            $res = $db->exec($query);
            $db = null;
        } catch (PDOException $e) {
            echo 'Erro: ' . $e->getMessage();
        }
        return $res;
    }
    public function QuerySelect($query)
    {
        $resultArray = array();
        try {
            $db = $this->GetConn();
            $result = $db->query($query);
            if ($result) {
                $resultArray = $result->fetch_all(MYSQLI_ASSOC);
            }
            $result->free();
            $db->close();
        } catch (Exception $e) {
            echo 'Erro: ' . $e->getMessage();
        }
        return $resultArray;
    }

    public function InsertWithParams($query, $params = array())
    {
        $db = $this->GetConn();
        $stmt = $db->prepare($query);
        $types = '';
        $values = [];
        foreach ($params as $param) {
            $types .= $param['type'];
            $values[] = $param['value'];
        }
        $stmt->bind_param($types, ...$values);
        $stmt->execute();
        $id = $stmt->insert_id;
        $stmt->close();
        return $id;
    }
    function QueryWithParams($query, $params = array())
{
    $db = GetConn();
    $stmt = $db->prepare($query);
    $types = '';
    $values = [];
    foreach ($params as $param) {
        $types .= $param['type'];
        $values[] = $param['value'];
    }
    $stmt->bind_param($types, ...$values);
    $stmt->execute();

    // Obter os resultados da consulta
    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);

    $stmt->close();
    return $data;
}
}
