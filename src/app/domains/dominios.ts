export interface TipoIndicador {
    codigo:string;
    nombre:string;
    unidad_medida:string;
    fecha:string;
    valor:number;
}

export interface ResponseIndicadores {
    version:string;
    autor:string;
    fecha:string;
    uf:TipoIndicador;
    ivp:TipoIndicador;
    dolar:TipoIndicador;
    dolar_intercambio:TipoIndicador;
    euro:TipoIndicador;
    imacec:TipoIndicador;
    tpm:TipoIndicador;
    libra_cobre:TipoIndicador;
    tasa_desempleo:TipoIndicador;
    bitcoin:TipoIndicador;
}

export interface DetalleIndicador {
    version:string;
    autor:string;
    codigo:string;
    nombre:string;
    unidad_medida:string;
    serie:SerieHistorico[];
}

export interface SerieHistorico {
    fecha:string;
    valor:number;
}