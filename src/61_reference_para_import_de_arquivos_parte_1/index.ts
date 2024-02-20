/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />

import { MyNamespace } from "./modulo/module";

console.log(MyNamespace.AnotherNamespace);

/*
  $ npx tsc src/61_reference_para_import_de_arquivos_parte_1/index.ts --outFile src/61_reference_para_import_de_arquivos_parte_1/index.js
    - erro -> Cannot compile modules using option 'outFile' unless the '--module' flag is 'amd' or 'system'.
    - nao funcionou nem alterado o sistema de modulos para AMD nem para System
    - somenter usando importa e executando pelo codeRunner
 */
