

class FilaCircular {
  
   private vetor : (number|undefined)[];
  private tamanho : number; 
  private inicio : number;
  private fim : number;

  constructor (digite_o_tamanho_da_fila : number) {
    this.vetor = Array(digite_o_tamanho_da_fila).fill(undefined);
    this.tamanho = digite_o_tamanho_da_fila;
    this.inicio = 0;
    this.fim = 0;
  }

  public veriFilaCheia():boolean{
   
    if(this.fim==this.inicio && this.inicio != undefined){
      return true;
    }
    return false;

  }

  private veriFinal(inicioOuFim:number):boolean{
      
    if((inicioOuFim+1)== this.tamanho){
      return true;
    }
    return false;

  }

  public veriFilaVazia():boolean{
    if(this.vetor[this.inicio]== undefined){
     return true;
    }
    return false;
  }

  public enfileirar(valor:number) : void {
      
    if(this.inicio == 99){
     console.log("fila cheia!");
    }else{
      if(this.veriFinal(this.fim)){

        if(this.vetor[this.fim]== undefined){
          this.vetor[this.fim] = valor;
          this.fim = 0;
          console.log("valor adicionado com sucesso!");

        }else{

          this.fim = 0;
          if(this.veriFilaCheia()){
            console.log("Fila cheia!");
          }else{
            this.vetor[this.fim] = valor;
            this.fim++;
            console.log("valor adicionado com sucesso!");
          }

        }
         
      }else{
        this.vetor[this.fim] = valor;
        this.fim++;
        console.log("valor adicionado com sucesso!");
      }
    }
  } 

  desemfileirar():void{
    
    if(this.veriFilaVazia()){
      console.log("A fila já está vazia!");
    }else{

      if(this.veriFinal(this.inicio)){
        this.vetor[this.inicio] = undefined;
        this.inicio = 0;
      }else{
        this.vetor[this.inicio] = undefined;
        this.inicio++;
      }
    }
    console.log(`O valor inicial é: ${this.vetor[this.inicio]}`);
  }

  mostrarInicio():(number|undefined){
    return this.vetor[this.inicio];
  }
 
  exibirQuant():void{
   let i,registrador : number; registrador = 0;
   for(i=0;i<this.tamanho;i++){
     if(this.vetor[i] != undefined){
       registrador++;
      }
    }

    console.log(`A fila possui ${registrador} elementos`);
  }

  mostrarElementos():void{
     let i : number;
     for(i=0;i<this.tamanho;i++){
     if(this.vetor[i] != undefined){
       console.log(this.vetor[i]);
      }
    }
  }

  capMax():number{
    return this.tamanho;
  }

  podeInserir():void{
    let i,registrador : number; registrador = 0;
    for(i=0;i<this.tamanho;i++){
     if(this.vetor[i] == undefined){
       registrador++;
      }
    }
    console.log(`Ainda Podem ser inseridos ${registrador} Número(s)`);
  }
}



