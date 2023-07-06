export class Financialmeasure {
    origine: string | undefined;
    date: string | undefined;
    stat: string | undefined;
    typologie: string | undefined;
    motif: string | undefined;
    mtht: string | undefined;
    mttt: string | undefined;
    identifiant: string | undefined;
    entitecc: string | undefined;
    sifac: string | undefined;
    sm: string | undefined;

    constructor(origine: string,date:string, stat:string,typologie: string,motif:string,mtht:string, mttt:string,identifiant: string,entitecc:string, sifac:string,sm:string) {
        this.origine=origine;
         this.date=date;
        this.stat=stat;
        this.typologie=typologie;
        this.mttt=mttt;
        this.mtht=mtht;
        this.identifiant=identifiant;
        this.entitecc=entitecc;
        this.sifac=sifac;
        this.sm=sm;
        this.motif=motif

    }

 }