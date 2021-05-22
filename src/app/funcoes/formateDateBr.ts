// tslint:disable-next-line: typedef
export default function FormateDateBr(arg: string){
    const dia =  arg.slice(8, 10);
    const mes = arg.slice(5, 7);
    const ano = arg.slice(0, 4);
    const hora = arg.slice(11, 19);

    return dia + '/' + mes + '/' + ano + ' as ' + hora;
}
