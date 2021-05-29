// tslint:disable-next-line: typedef
export default function FormateDateBr(arg: string){
    // tslint:disable-next-line: no-unused-expression
    return arg.slice(0, 10).split('-').reverse().join('/') + ' às ' + arg.slice(11, 19);
}
