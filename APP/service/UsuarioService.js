import { createRequest, configService } from './config.js';
import {store}from '../store/appStore.js';

export const UsuarioService = {
  PesquisarPorNome(usuarioNome) {
    return new Promise((resolve, reject) => {
      const xhr = createRequest();
      xhr.open('GET', `${configService.baseURL}/usuarios?nome=${encodeURIComponent(usuarioNome)}`, true);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };

      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };

      xhr.send();
    });
  },
  DashBoard() {
    return {data:"01/02"}
    return new Promise((resolve, reject) => {
      const xhr = createRequest();
      xhr.open('GET', `${configService.baseURL}/usuario/dashboard`, true);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };

      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };

      xhr.send();
    });
  },
  PorId(usuarioId) {
    return new Promise((resolve, reject) => {
      const xhr = createRequest();
      xhr.open('GET', `${configService.baseURL}/usuario?usuarioId=${usuarioId}`, true);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    });
  },

  Criar(usuarioData) {
    return new Promise((resolve, reject) => {
      const xhr = createRequest();
      xhr.open('POST', `${configService.baseURL}/usuario`, true);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };

      xhr.send(JSON.stringify(usuarioData));
    });
  }
};
