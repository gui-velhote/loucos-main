
export default class DocumentsService {
  listarTipdoc() {
    return fetch('http://localhost:8081/listar/tipdoc')
  }
}
